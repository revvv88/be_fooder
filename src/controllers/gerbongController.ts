import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
// import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient({ errorFormat: "pretty" })

export const getAllgerbongs = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { search } = request.query

        /** process to get gerbong, contains means search name of gerbong based on sent keyword */
        const allgerbong = await prisma.gerbong.findMany({
            where: { nama: { contains: search?.toString() || "" } }
        })

        return response.json({
            status: true,
            data: allgerbong,
            message: `gerbong has retrieved`
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

export const getgerbongById = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { id } = request.body.gerbong

        if (!id) {
            return response
            .json({
                status: false,
                message: `gerbong Not Found`
            })
            .status(400)
        }

        /** process to get gerbong, contains means search name of gerbong based on sent keyword */
        const allgerbong = await prisma.gerbong.findFirst({
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: allgerbong,
            message: `gerbong has retrieved`
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

export const creategerbong = async (request: Request, response: Response) => {
    try {
        /** get requested data (data has been sent from request) */
        const { nama,kelas_kereta_id} = request.body
        // const uuid = uuidv4()

        /** variable filename use to define of uploaded file name */
        let filename = ""
        if (request.file) filename = request.file.filename /** get file name of uploaded file */

        /** process to save new gerbong */
        const newgerbong = await prisma.gerbong.create({
            data: {nama,kelas_kereta_id}
        })

        return response.json({
            status: true,
            data: newgerbong,
            message: `New gerbong has created`
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

export const updategerbong = async (request: Request, response: Response) => {
    try {
        /** get id of gerbong's id that sent in parameter of URL */
        const { id } = request.params
        /** get requested data (data has been sent from request) */
        const { nama,kelas_kereta_id} = request.body

        /** make sure that data is exists in database */
        const findgerbong = await prisma.gerbong.findFirst({ where: { id: Number(id) } })
        if (!findgerbong) return response
            .status(200)
            .json({ status: false, message: `gerbong is not found` })

        /** default value filename of saved data */
       

        /** process to update gerbong's data */
        const updatedgerbong = await prisma.gerbong.update({
            data: {
                nama: nama || findgerbong.nama,
                kelas_kereta_id: kelas_kereta_id,
            },
            where: { id: Number(id) }
        })

        return response.json({
            status: true,
            data: updatedgerbong,
            message: `gerbong has updated`
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


export const deletegerbong = async (request: Request, response: Response) => {
    try {
        /** get id of gerbong's id that sent in parameter of URL */
        const { id } = request.params
        /** make sure that data is exists in database */
        const findgerbong = await prisma.gerbong.findFirst({ where: { id: Number(id) } })
        // if (!findgerbong) return response
        //     .status(200)
        //     .json({ status: false, message: `gerbong is not found` })

        // /** prepare to delete file of deleted gerbong's data */
        // let path = `${BASE_URL}/public/profile_picture/${findgerbong.profile_picture}` /** define path (address) of file location */
        // let exists = fs.existsSync(path)
        // if (exists && findgerbong.profile_picture !== ``) fs.unlinkSync(path) /** if file exist, then will be delete */

        /** process to delete gerbong's data */
        const deletedgerbong = await prisma.gerbong.delete({
            where: { id: Number(id) }
        })
        return response.json({
            status: true,
            data: deletedgerbong,
            message: `gerbong has deleted`
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

export const getGerbongDanKursiByJadwal = async (req: Request, res: Response) => {
    const { id } = req.params; // ID dari jadwal
  
    try {
      const jadwal = await prisma.jadwal_Kereta.findUnique({
        where: { id: Number(id) },
        include: {
          kelas_kereta: {
            include: {
              gerbong_list: {
                include: {
                  kursi_list: {
                    include: {
                      tickets: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
  
      if (!jadwal) {
        return res.status(404).json({
          status: false,
          message: 'Jadwal tidak ditemukan',
        });
      }
  
      // Format data yang dikirim ke FE
      const data = jadwal.kelas_kereta.gerbong_list.map((gerbong) => ({
        id: gerbong.id,
        nama: gerbong.nama,
        kursi: gerbong.kursi_list.map((k) => ({
          id: k.id,
          nomor: k.nomor,
          tersedia: k.tickets.length === 0, // true kalau belum dibook
        })),
      }));
  
      return res.status(200).json({
        status: true,
        data,
        message: 'Data gerbong & kursi berhasil diambil',
      });
    } catch (error) {
      return res.status(500).json({
        status: false,
        message: `Terjadi kesalahan: ${error}`,
      });
    }
  };
  

