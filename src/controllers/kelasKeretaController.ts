import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
// import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient({ errorFormat: "pretty" })

export const getAllkelas_Keretas = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { search } = request.query

        /** process to get kelas_Kereta, contains means search name of kelas_Kereta based on sent keyword */
        const allkelas_Kereta = await prisma.kelas_Kereta.findMany({
            where: { nama: { contains: search?.toString() || "" } }
        })

        return response.json({
            status: true,
            data: allkelas_Kereta,
            message: `kelas_Kereta has retrieved`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const getkelas_KeretaById = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { id } = request.body.kelas_Kereta

        if (!id) {
            return response
            .json({
                status: false,
                message: `kelas_Kereta Not Found`
            })
            .status(400)
        }

        /** process to get kelas_Kereta, contains means search name of kelas_Kereta based on sent keyword */
        const allkelas_Kereta = await prisma.kelas_Kereta.findFirst({
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: allkelas_Kereta,
            message: `kelas_Kereta has retrieved`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const createkelas_Kereta = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { nama } = request.body
        // const uuid = uuidv4()

        /** variable filename use to define of uploaded file name */
        let filename = ""
        if (request.file) filename = request.file.filename /** get file name of uploaded file */

        /** process to save new kelas_Kereta */
        const newkelas_Kereta = await prisma.kelas_Kereta.create({
            data: { nama}
        })

        return response.json({
            status: true,
            data: newkelas_Kereta,
            message: `New kelas_Kereta has created`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}

export const updatekelas_Kereta = async (request: Request, response: Response) => {
    try {
        /** get id of kelas_Kereta's id that sent in parameter of URL */
        const { id } = request.params
        /** get requested data (data has been sent from request) */
        const { nama } = request.body

        /** make sure that data is exists in database */
        const findkelas_Kereta = await prisma.kelas_Kereta.findFirst({ where: { id: Number(id) } })
        if (!findkelas_Kereta) return response
            .status(200)
            .json({ status: false, message: `kelas_Kereta is not found` })

        /** default value filename of saved data */
       

        /** process to update kelas_Kereta's data */
        const updatedkelas_Kereta = await prisma.kelas_Kereta.update({
            data: {
                nama: nama || findkelas_Kereta.nama,
            },
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: updatedkelas_Kereta,
            message: `kelas_Kereta has updated`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}


export const deletekelas_Kereta = async (request: Request, response: Response) => {
    try {
        /** get id of kelas_Kereta's id that sent in parameter of URL */
        const { id } = request.params
        /** make sure that data is exists in database */
        const findkelas_Kereta = await prisma.kelas_Kereta.findFirst({ where: { id: Number(id) } })
        // if (!findkelas_Kereta) return response
        //     .status(200)
        //     .json({ status: false, message: `kelas_Kereta is not found` })

        // /** prepare to delete file of deleted kelas_Kereta's data */
        // let path = `${BASE_URL}/public/profile_picture/${findkelas_Kereta.profile_picture}` /** define path (address) of file location */
        // let exists = fs.existsSync(path)
        // if (exists && findkelas_Kereta.profile_picture !== ``) fs.unlinkSync(path) /** if file exist, then will be delete */

        /** process to delete kelas_Kereta's data */
        const deletedkelas_Kereta = await prisma.kelas_Kereta.delete({
            where: { id: Number(id) }
        })
        return response.json({
            status: true,
            data: deletedkelas_Kereta,
            message: `kelas_Kereta has deleted`
        }).status(200)
    } catch (error) {
        return response
            .json({
                status: false,
                message: `There is an error. ${error}`
            })
            .status(400)
    }
}