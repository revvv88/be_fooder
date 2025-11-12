import { Request, Response } from "express";
import { PrismaClient, Role } from "../../generated/prisma";
import md5 from "md5";
import { sign } from "jsonwebtoken";
import { SECRET } from "../global";

const prisma = new PrismaClient({ errorFormat: "pretty" });

export const getAllUsers = async (request: Request, response: Response) => {
  try {
    const { search } = request.query;
    const allUser = await prisma.user.findMany({
      where: { name: { contains: search?.toString() || "" } },
    });
    return response.status(200).json({
      status: true,
      data: allUser,
      message: `User has been retrieved`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};

export const getUserById = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const user = await prisma.user.findFirst({
      where: { id: Number(id) },
    });
    if (!user) {
      return response.status(404).json({
        status: false,
        message: `User not found`,
      });
    }
    return response.status(200).json({
      status: true,
      data: user,
      message: `User has been retrieved`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};

export const createUser = async (request: Request, response: Response) => {
  try {
    const { name, email, password, role, nomor_identitas, nomor_hp, alamat } =
      request.body;
    const normalizedRole = role?.toUpperCase() as keyof typeof Role;

    // Cek apakah role valid
    if (!normalizedRole || !Object.keys(Role).includes(normalizedRole)) {
      return response.status(400).json({
        status: false,
        message: `Invalid role value: ${role}`,
      });
    }

    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: md5(password),
        role: Role[normalizedRole],
        nomor_identitas:(nomor_identitas),
        nomor_hp:(nomor_hp),
        alamat,
        updatedAt: new Date(),
      },
    });

    return response.status(201).json({
      status: true,
      data: newUser,
      message: `New user has been created`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};

export const updateUser = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;
    const { name, email, password, role, nomor_identitas, nomor_hp, alamat } =
      request.body;

    const findUser = await prisma.user.findFirst({ where: { id: Number(id) } });
    if (!findUser) {
      return response.status(404).json({
        status: false,
        message: `User not found`,
      });
    }

    const updatedUser = await prisma.user.update({
      where: { id: Number(id) },
      data: {
        name: name ?? findUser.name,
        email: email ?? findUser.email,
        password: password ? md5(password) : findUser.password,
        role: role ?? findUser.role,
        nomor_identitas: nomor_identitas ?? findUser.nomor_identitas,
        nomor_hp: nomor_hp ?? findUser.nomor_hp,
        alamat: alamat ?? findUser.alamat,
      },
    });

    return response.status(200).json({
      status: true,
      data: updatedUser,
      message: `User has been updated`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};

export const deleteUser = async (request: Request, response: Response) => {
  try {
    const { id } = request.params;

    const findUser = await prisma.user.findFirst({ where: { id: Number(id) } });
    if (!findUser) {
      return response.status(404).json({
        status: false,
        message: `User not found`,
      });
    }

    const deletedUser = await prisma.user.delete({ where: { id: Number(id) } });
    return response.status(200).json({
      status: true,
      data: deletedUser,
      message: `User has been deleted`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};

export const authentication = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const findUser = await prisma.user.findFirst({
      where: { email, password: md5(password) },
    });

    if (!findUser) {
      return response.status(401).json({
        status: false,
        logged: false,
        message: `Email or password is invalid`,
      });
    }

    const payload = {
      id: findUser.id,
      name: findUser.name,
      email: findUser.email,
      role: findUser.role,
    };

    const token = sign(payload, SECRET || "secret", { expiresIn: "1d" });

    return response.status(200).json({
      status: true,
      logged: true,
      data: findUser,
      token,
      message: `Login success`,
    });
  } catch (error) {
    return response.status(400).json({
      status: false,
      message: `There is an error. ${error}`,
    });
  }
};
