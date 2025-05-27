import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { string } from "joi";

const prisma = new PrismaClient();

export const getAllstasiun = async (req: Request, res: Response) => {
  try {
    const stasiuns = await prisma.stasiun.findMany();

    return res.status(200).json({
      status: true,
      data: stasiuns,
      message: "All stasiun retrieved successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const getstasiunById = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const stasiun = await prisma.stasiun.findUnique({
      where: { id },
    });

    if (!stasiun) {
      return res.status(404).json({
        status: false,
        message: "stasiun not found",
      });
    }

    return res.status(200).json({
      status: true,
      data: stasiun,
      message: "stasiun retrieved successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const createstasiun = async (req: Request, res: Response) => {
  try {
    const { nama, kota } = req.body;

    const newstasiun = await prisma.stasiun.create({
      data: {
        nama,
        kota,
      },
    });

    return res.status(201).json({
      status: true,
      data: newstasiun,
      message: "New stasiun created successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const updatestasiun = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { nama, kota } = req.body;

    const updatedstasiun = await prisma.stasiun.update({
      where: { id },
      data: {
        nama,
        kota,
      },
    });

    return res.status(200).json({
      status: true,
      data: updatedstasiun,
      message: "stasiun updated successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const deletestasiun = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const deletedstasiun = await prisma.stasiun.delete({
      where: { id },
    });

    return res.status(200).json({
      status: true,
      data: deletedstasiun,
      message: "stasiun deleted successfully",
    });
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};
