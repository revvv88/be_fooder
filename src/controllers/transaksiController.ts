import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();


export const getAllTransaksi = async (req: Request, res: Response) => {
  try {
    const transaksi = await prisma.transaksi.findMany({
      include: { metode_pembayaran: true, tickets: true },
    });
    res.status(200).json({ status: true, data: transaksi });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const getTransaksiById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const transaksi = await prisma.transaksi.findUnique({
      where: { id: Number(id) },
      include: { metode_pembayaran: true, tickets: true },
    });
    if (!transaksi)
      return res
        .status(404)
        .json({ status: false, message: "Transaksi not found" });

    res.status(200).json({ status: true, data: transaksi });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const createTransaksi = async (req: Request, res: Response) => {
  try {
    const { ticketIds, total_harga, metode_pembayaran_id, status } = req.body;

    const transaksi = await prisma.transaksi.create({
      data: {
        total_harga,
        metode_pembayaran_id,
        status,
        tickets: {
          connect: ticketIds.map((id: number) => ({ id })),
        },
      },
    });

    res
      .status(201)
      .json({ status: true, data: transaksi, message: "Transaksi created" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};

export const updateTransaksi = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { total_harga, metode_pembayaran_id, status } = req.body;

    const transaksi = await prisma.transaksi.update({
      where: { id: Number(id) },
      data: {
        total_harga,
        metode_pembayaran_id,
        status,
      },
    });

    res
      .status(200)
      .json({ status: true, data: transaksi, message: "Transaksi updated" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};

export const deleteTransaksi = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const transaksi = await prisma.transaksi.delete({
      where: { id: Number(id) },
    });

    res
      .status(200)
      .json({ status: true, data: transaksi, message: "Transaksi deleted" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};
