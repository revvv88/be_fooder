import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";

const prisma = new PrismaClient();
export const getAllTickets = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;

    const tickets = await prisma.ticket.findMany({
      where: {
        OR: [
          { user: { name: { contains: search?.toString() || "" } } },
          {
            tanggal: {
              equals: search ? new Date(search.toString()) : undefined,
            },
          },
        ],
      },
      orderBy: { tanggal: "desc" },
      include: {},
    });

    res.status(200).json({
      status: true,
      data: tickets,
      message: "Ticket list retrieved",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const createTicket = async (req: Request, res: Response) => {
  try {
    const {
      user_id,
      kursi_id,
      kelas_kereta_id,
      jadwal_kereta_id,
      transaksi_id,
      tanggal,
      penumpang, // expect: { nama, nomor_identitas, nomor_hp, address }
    } = req.body;

    const newTicket = await prisma.ticket.create({
      data: {
        user: { connect: { id: user_id } },
        kursi: { connect: { id: kursi_id } },
        kelas_kereta: { connect: { id: kelas_kereta_id } },
        jadwal_kereta: { connect: { id: jadwal_kereta_id } },
        transaksi: { connect: { id: transaksi_id } },
        tanggal: new Date(tanggal),
        penumpang: {
          create: {
            nama: penumpang.nama,
            nomor_identitas: penumpang.nomor_identitas,
            nomor_hp: penumpang.nomor_hp,
            address: penumpang.address,
          },
        },
      },
      include: {
        penumpang: true,
      },
    });

    res.status(200).json({
      status: true,
      data: newTicket,
      message: "New ticket and penumpang created",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const {
      user_id,
      kursi_id,
      kelas_kereta_id,
      jadwal_kereta_id,
      transaksi_id,
      tanggal,
      penumpang, // expect: { nama, nomor_identitas, nomor_hp, address }
    } = req.body;

    const updatedTicket = await prisma.ticket.update({
      where: { id: Number(id) },
      data: {
        user: { connect: { id: user_id } },
        kursi: { connect: { id: kursi_id } },
        kelas_kereta: { connect: { id: kelas_kereta_id } },
        jadwal_kereta: { connect: { id: jadwal_kereta_id } },
        transaksi: { connect: { id: transaksi_id } },
        tanggal: tanggal ? new Date(tanggal) : undefined,

        penumpang: {
          update: {
            nama: penumpang.nama,
            nomor_identitas: penumpang.nomor_identitas,
            nomor_hp: penumpang.nomor_hp,
            address: penumpang.address,
          },
        },
      },
      include: {
        penumpang: true,
      },
    });

    res.status(200).json({
      status: true,
      data: updatedTicket,
      message: "Ticket and penumpang updated successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const deleteTicket = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(id) },
    });
    if (!ticket) {
      return res.status(404).json({
        status: false,
        message: "Ticket not found",
      });
    }

    await prisma.ticket.delete({ where: { id: Number(id) } });

    res.status(200).json({
      status: true,
      message: "Ticket deleted successfully",
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const getTicketById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const ticket = await prisma.ticket.findUnique({
      where: { id: Number(id) },
      include: {
        user: true,
        kursi: true,
        kelas_kereta: true,
        jadwal_kereta: true,
        transaksi: true,
      },
    });

    if (!ticket) {
      return res.status(404).json({
        status: false,
        message: "Ticket not found",
      });
    }

    res.status(200).json({
      status: true,
      data: ticket,
      message: `Ticket with ID ${id} retrieved`,
    });
  } catch (error) {
    res.status(400).json({
      status: false,
      message: `Error: ${error}`,
    });
  }
};

export const getAllHistory = async (req: Request, res: Response) => {
  try {
    const { user_id } = req.query;

    const tickets = await prisma.ticket.findMany({
      where: user_id ? { user_id: Number(user_id) } : undefined,
      include: {
        user: { select: { id: true, name: true, email: true } },
        kursi: true,
        kelas_kereta: true,
        jadwal_kereta: true,
        transaksi: true,
      },
    });

    res.status(200).json({
      status: true,
      data: tickets,
      message: "Ticket history retrieved",
    });
  } catch (error) {
    res.status(500).json({
      status: false,
      message: `Error retrieving ticket history: ${error}`,
    });
  }
};
