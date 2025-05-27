import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user?: any; // tambah properti user ke request
}

const secret = process.env.JWT_SECRET || "rahasia"; // jangan lupa taruh di .env juga ya

export const verifyToken = (req: AuthRequest, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer || !bearer.startsWith("Bearer ")) {
    return res.status(401).json({ status: false, message: "Token tidak ditemukan" });
  }

  const token = bearer.split(" ")[1];

  try {
    const decoded = jwt.verify(token, secret);
    req.user = decoded; // inject ke req biar bisa diakses nanti
    next();
  } catch (error) {
    return res.status(401).json({ status: false, message: "Token tidak valid" });
  }
};
