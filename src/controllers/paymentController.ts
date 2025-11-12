import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { BASE_URL } from "../global";
import fs from "fs";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllPayments = async (req: Request, res: Response) => {
  try {
    const payments = await prisma.transaksi.findMany({
      include: { metode_pembayaran: true, tickets: true },
    });

    return res.status(200).json({
      status: true,
      data: payments,
      message: "All payments retrieved successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const createPayment = async (req: Request, res: Response) => {
  try {
    const { total_harga, metode_pembayaran_id, status, ticket_ids } = req.body;

    const newPayment = await prisma.transaksi.create({
      data: {
        total_harga: parseFloat(total_harga),
        metode_pembayaran_id: parseInt(metode_pembayaran_id),
        status,
        tickets: {
          connect: ticket_ids.map((id: number) => ({ id })),
        },
      },
    });

    return res.status(201).json({
      status: true,
      data: newPayment,
      message: "New payment created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const updatePayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { total_harga, metode_pembayaran_id, status } = req.body;

    const existingPayment = await prisma.transaksi.findUnique({
      where: { id: Number(id) },
    });

    if (!existingPayment) {
      return res.status(404).json({
        status: false,
        message: "Payment not found",
      });
    }

    const updatedPayment = await prisma.transaksi.update({
      where: { id: Number(id) },
      data: {
        total_harga: total_harga !== undefined ? parseFloat(total_harga) : existingPayment.total_harga,
        metode_pembayaran_id: metode_pembayaran_id !== undefined ? parseInt(metode_pembayaran_id) : existingPayment.metode_pembayaran_id,
        status: status || existingPayment.status,
      },
    });

    return res.status(200).json({
      status: true,
      data: updatedPayment,
      message: "Payment updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const deletePayment = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const existingPayment = await prisma.transaksi.findUnique({
      where: { id: Number(id) },
    });

    if (!existingPayment) {
      return res.status(404).json({
        status: false,
        message: "Payment not found",
      });
    }

    const deletedPayment = await prisma.transaksi.delete({
      where: { id: Number(id) },
    });

    return res.status(200).json({
      status: true,
      data: deletedPayment,
      message: "Payment deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const updateByOrderId = async (request: Request, response: Response) => {
  try {
    /** get id of menu's id that sent in parameter of URL */
    const { id } = request.params;
    /** get requested data (data has been sent from request) */
    const { id_order, id_method, uang_masuk, status, email } = request.body;

    /** make sure that data is exists in database */
    const findPayOrder = await prisma.transaksi.findFirst({
      where: { id: Number(id) },
    });
    if (!findPayOrder)
      return response
        .status(200)
        .json({ status: false, message: `PayOrder is not found` });

    /** default value filename of saved data */

    /** process to update menu's data */
    const updatedPayOrder = await prisma.transaksi.update({
      data: {
        metode_pembayaran_id: parseInt(id_method) || findPayOrder.metode_pembayaran_id,
        status: status || findPayOrder.status,
        va: request.body.va || findPayOrder.va,
        nomor_kartu: request.body.nomor_kartu || findPayOrder.nomor_kartu,
        
      },
      where: { id: findPayOrder.id },
    });

    return response
      .json({
        status: true,
        data: updatedPayOrder,
        message: `PayOrder has updated`,
      })
      .status(200);
  } catch (error) {
    return response
      .json({
        status: false,
        message: `There is an error. ${error}`,
      })
      .status(400);
  }
};

