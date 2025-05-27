import { Request, Response } from "express"
import { PrismaClient } from "../../generated/prisma"

const prisma = new PrismaClient()

export const getAllKursi = async (req: Request, res: Response) => {
  try {
    const kursis = await prisma.kursi.findMany({
      include: {
        gerbong: true,
        tickets: true
      }
    })

    return res.status(200).json({
      status: true,
      data: kursis,
      message: "All kursi retrieved successfully"
    })
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`
    })
  }
}

export const getKursiById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    const kursi = await prisma.kursi.findUnique({
      where: { id },
      include: {
        gerbong: true,
        tickets: true
      }
    })

    if (!kursi) {
      return res.status(404).json({
        status: false,
        message: "Kursi not found"
      })
    }

    return res.status(200).json({
      status: true,
      data: kursi,
      message: "Kursi retrieved successfully"
    })
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`
    })
  }
}

export const createKursi = async (req: Request, res: Response) => {
  try {
    const { nomor, gerbong_id } = req.body

    const newKursi = await prisma.kursi.create({
      data: {
        nomor,
        gerbong_id: Number(gerbong_id)
      }
    })

    return res.status(201).json({
      status: true,
      data: newKursi,
      message: "New kursi created successfully"
    })
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`
    })
  }
}

export const updateKursi = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)
    const { nomor, gerbong_id } = req.body

    const updatedKursi = await prisma.kursi.update({
      where: { id },
      data: {
        nomor,
        gerbong_id: Number(gerbong_id)
      }
    })

    return res.status(200).json({
      status: true,
      data: updatedKursi,
      message: "Kursi updated successfully"
    })
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`
    })
  }
}

export const deleteKursi = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id)

    const deletedKursi = await prisma.kursi.delete({
      where: { id }
    })

    return res.status(200).json({
      status: true,
      data: deletedKursi,
      message: "Kursi deleted successfully"
    })
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`
    })
  }
}


export const getKursiByJadwalAndGerbong = async (req: Request, res: Response) => {
  try {
    const jadwalKeretaId = Number(req.query.jadwalKeretaId);
    const gerbongId = Number(req.query.gerbongId);
    if (!jadwalKeretaId || !gerbongId) {
      return res.status(400).json({
        status: false,
        message: "jadwalKeretaId and gerbongId are required"
      });
    }

    const kursiList = await prisma.kursi.findMany({
      where: { gerbong_id: gerbongId },
      include: {
        tickets: {
          where: { jadwal_kereta_id: jadwalKeretaId }
        }
      }
    });

    const result = kursiList.map(kursi => ({
      id: kursi.id,
      nomor: kursi.nomor,
      status: kursi.tickets.length > 0 ? "unavailable" : "available"
    }));

    return res.status(200).json({
      status: true,
      data: result,
      message: "Kursi list retrieved successfully"
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: false,
      message: `Error: ${error}`
    });
  }
};

