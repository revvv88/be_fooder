import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { sign } from "jsonwebtoken";
import { AuthRequest } from "../middlewares/verifyToken";

const prisma = new PrismaClient({ errorFormat: "pretty" });
export const getJadwalKereta = async (req: Request, res: Response) => {
  const { from, to, tanggal } = req.query;

  try {
    const whereClause: any = {};

    if (from) whereClause.dari_id = Number(from);
    if (to) whereClause.ke_id = Number(to);
    if (tanggal) {
      const date = new Date(String(tanggal));
      if (!isNaN(date.getTime())) {
        whereClause.tanggal = date;
      }
    }

    const jadwal = await prisma.jadwal_Kereta.findMany({
      where: whereClause,
      include: {
        kelas_kereta: true,
        dari_stasiun:true,
        ke_stasiun: true,
        gerbong: true,
      },
    });

    res.status(200).json({ status: true, data: jadwal, message: "Jadwal ditemukan" });
  } catch (err) {
    console.error("Error di getJadwalKereta:", err);
    res.status(500).json({ status: false, message: "Gagal ambil data jadwal" });
  }
};


export const getJadwalKeretaById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ticket = await prisma.jadwal_Kereta.findUnique({
      where: { id: Number(id) },
      include: {
        kelas_kereta: true,
        dari_stasiun: true,
        ke_stasiun: true,
        gerbong:true
      },
    });

    if (!ticket)
      return res
        .status(404)
        .json({ status: false, message: "JadwalKereta not found" });

    res
      .status(200)
      .json({
        status: true,
        data: ticket,
        message: "JadwalKereta found",
      });
  } catch (error) {
    res.status(400).json({ status: false, message: `Error: ${error}` });
  }
};

export const createJadwalKereta = async (req: Request, res: Response) => {
  try {
    const {
      kelas_kereta_id,
      transaksi_id,
      gerbong_id,
      tanggal,
      dari_id,
      ke_id,
      jam_berangkat,
      jam_tiba,
      harga,
    } = req.body;

    // Validasi kursi udah dibooking
    const existing = await prisma.jadwal_Kereta.findFirst({
      where: {
        kelas_kereta_id,
        tanggal: new Date(tanggal),
      },
    });

   

    const newJadwalKereta = await prisma.jadwal_Kereta.create({
      data: {
        dari_id,
        ke_id,
        tanggal: new Date(tanggal),
        jam_berangkat,
        jam_tiba,
        kelas_kereta_id,
        harga,
        gerbong_id,
      },
    });

    res.status(201).json({
      status: true,
      data: newJadwalKereta,
      message: "JadwalKereta created",
    });
  } catch (error) {
    res.status(400).json({ status: false, message: `Error: ${error}` });
  }
};


export const updateJadwalKereta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      kelas_kereta_id,
      transaksi_id,
      tanggal,
      dari_id,
      ke_id,
      jam_berangkat,
      jam_tiba,
      harga,
      gerbong_id
    } = req.body;

    const updatedJadwalKereta = await prisma.jadwal_Kereta.update({
      data: {
        dari_id,
        ke_id,
        tanggal: new Date(tanggal),
        jam_berangkat,
        jam_tiba,
        kelas_kereta_id,
        harga,
        gerbong_id
      },
      where: { id: Number(id) },
    });

    res
      .status(200)
      .json({
        status: true,
        data: updatedJadwalKereta,
        message: "Ticket updated",
      });
  } catch (error) {
    res.status(400).json({ status: false, message: `Error: ${error}` });
  }
};

export const deleteJadwalKereta = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const deleted = await prisma.jadwal_Kereta.delete({
      where: { id: Number(id) },
    });

    res
      .status(200)
      .json({ status: true, data: deleted, message: "Ticket deleted" });
  } catch (error) {
    res.status(400).json({ status: false, message: `Error: ${error}` });
  }
};
