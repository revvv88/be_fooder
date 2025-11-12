import { Request, Response } from "express";
import { $Enums, PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();


export const getAllMetode = async (req: Request, res: Response) => {
  try {
    const metode = await prisma.metode_Pembayaran.findMany({
      include: { transaksi_list: true }
    });
    res.status(200).json({ status: true, data: metode });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const getMetodeById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const metode = await prisma.metode_Pembayaran.findUnique({
      where: { id: Number(id) },
      include: { transaksi_list: true }
    });

    if (!metode) return res.status(404).json({ status: false, message: "Metode pembayaran not found" });

    res.status(200).json({ status: true, data: metode });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const createMetode = async (req: Request, res: Response) => {
  try {
    const { nama } = req.body;

    const metode = await prisma.metode_Pembayaran.create({
      data: { nama }
    });

    res.status(201).json({ status: true, data: metode, message: "Metode pembayaran created" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const updateMetode = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { nama } = req.body;

    const metode = await prisma.metode_Pembayaran.update({
      where: { id: Number(id) },
      data: { nama }
    });

    res.status(200).json({ status: true, data: metode, message: "Metode pembayaran updated" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};


export const deleteMetode = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const metode = await prisma.metode_Pembayaran.delete({
      where: { id: Number(id) }
    });

    res.status(200).json({ status: true, data: metode, message: "Metode pembayaran deleted" });
  } catch (err) {
    res.status(400).json({ status: false, message: `Error: ${err}` });
  }
};

export const getByType = async (request: Request, response: Response) => {
  try {
      /** get requested data (data has been sent from request) */
      const { type } = request.query

      /** process to get menu, contains means search name of menu based on sent keyword */
      const allMethod = await prisma.metode_Pembayaran.findMany({
          where: { tipe: type as $Enums.paymentmethod_tipe }
      })

      return response.json({
          status: true,
          data: allMethod,
          message: `Payment Method has retrieved`
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