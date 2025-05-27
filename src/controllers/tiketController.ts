import { Request, Response } from "express";
import { PrismaClient } from "../../generated/prisma";
import { v4 as uuidv4 } from "uuid";
import md5 from "md5";
import { sign } from "jsonwebtoken";
import { AuthRequest } from "../middlewares/verifyToken";

const prisma = new PrismaClient({ errorFormat: "pretty" })

export const getAllTickets = async (req: Request, res: Response) => {
    try {
      const tickets = await prisma.ticket.findMany({
        include: {
          user: true,
          kursi: true,
          kelas_kereta: true,
          transaksi: true,
        }
      });
  
      res.status(200).json({ status: true, data: tickets, message: "Tickets retrieved" });
    } catch (error) {
      res.status(400).json({ status: false, message: `Error: ${error}` });
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
          transaksi: true,
        }
      });
  
      if (!ticket) return res.status(404).json({ status: false, message: "Ticket not found" });
  
      res.status(200).json({ status: true, data: ticket, message: "Ticket found" });
    } catch (error) {
      res.status(400).json({ status: false, message: `Error: ${error}` });
    }
  };
  

  export const createTicket = async (req: AuthRequest, res: Response) => {
    try {
      const { kursi_id, kelas_kereta_id, jadwal_kereta_id, tanggal } = req.body;
  
      // ambil user_id dari JWT token, bukan dari req.body
      const user_id = req.user?.id;
  
      if (!user_id) {
        return res.status(401).json({ status: false, message: "Unauthorized" });
      }
  
      // validasi kursi udah dibooking
      const existing = await prisma.ticket.findFirst({
        where: {
          kursi_id,
          kelas_kereta_id,
          tanggal: new Date(tanggal),
        }
      });
  
      if (existing) {
        return res.status(400).json({
          status: false,
          message: "Kursi ini sudah dibooking pada jadwal tersebut",
        });
      }
  
      const newTicket = await prisma.ticket.create({
        data: {
          user_id,
          kursi_id,
          kelas_kereta_id,
          jadwal_kereta_id,
          tanggal: new Date(tanggal),
        }
      });
  
      res.status(201).json({ status: true, data: newTicket, message: "Ticket created" });
    } catch (error) {
      res.status(400).json({ status: false, message: `Error: ${error}` });
    }
  };
  

  
  export const updateTicket = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { user_id, kursi_id, kelas_kereta_id, transaksi_id, tanggal } = req.body;
  
      const updatedTicket = await prisma.ticket.update({
        where: { id: Number(id) },
        data: {
          user_id,
          kursi_id,
          kelas_kereta_id,
          transaksi_id,
          tanggal: new Date(tanggal),
        }
      });
  
      res.status(200).json({ status: true, data: updatedTicket, message: "Ticket updated" });
    } catch (error) {
      res.status(400).json({ status: false, message: `Error: ${error}` });
    }
  };

  
  export const deleteTicket = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
  
      const deleted = await prisma.ticket.delete({
        where: { id: Number(id) }
      });
  
      res.status(200).json({ status: true, data: deleted, message: "Ticket deleted" });
    } catch (error) {
      res.status(400).json({ status: false, message: `Error: ${error}` });
    }
  };
  

  
  
