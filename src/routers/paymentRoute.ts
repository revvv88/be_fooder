import express from "express"
import { 
    getAllTransaksi, 
    getTransaksiById, 
    createTransaksi, 
    updateTransaksi, 
    deleteTransaksi,  
} from "../controllers/transaksiController"
import { verifyToken, verifyRole } from "../middlewares/authorization"

const app = express()
app.use(express.json())

app.get(`/`, getAllTransaksi)
app.get(`/:id`, getTransaksiById)
app.post(`/`, verifyToken, createTransaksi)
app.put(`/:id`, verifyToken, updateTransaksi)
app.delete(`/:id`, verifyToken, deleteTransaksi)

export default app

/**
 * @swagger
 * components:
 *   schemas:
 *     Transaksi:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         userId:
 *           type: string
 *         jadwalId:
 *           type: string
 *         totalHarga:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: datetime
 *         updatedAt:
 *           type: string
 *           format: datetime
 *       example:
 *         id: 1
 *         userId: 1
 *         jadwalId: 1
 *         totalHarga: 50000
 *         createdAt: 2024-09-27T07:43:59.025Z
 *         updatedAt: 2024-10-29T09:34:34.999Z
 * tags:
 *   name: Transaksi
 *   description: The transaksi managing API
 * /transaksi:
 *   get:
 *     summary: Lists all the transaksi
 *     tags: [Transaksi]
 *     responses:
 *       200:
 *         description: The list of the transaksi
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaksi'
 *   post:
 *     summary: Create a new transaksi
 *     tags: [Transaksi]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaksi'
 *     responses:
 *       200:
 *         description: The created transaksi.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaksi'
 *       500:
 *         description: Some server error
 * /transaksi/{id}:
 *   get:
 *     summary: Get the transaksi by id
 *     tags: [Transaksi]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaksi id
 *     responses:
 *       200:
 *         description: The transaksi response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaksi'
 *       404:
 *         description: The transaksi was not found
 *   put:
 *     summary: Update the transaksi by id
 *     tags: [Transaksi]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaksi id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Transaksi'
 *     responses:
 *       200:
 *         description: The transaksi was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Transaksi'
 *       404:
 *         description: The transaksi was not found
 *       500:
 *         description: Some error happened
 *   delete:
 *     summary: Remove the transaksi by id
 *     tags: [Transaksi]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The transaksi id
 *     responses:
 *       200:
 *         description: The transaksi was deleted
 *       404:
 *         description: The transaksi was not found
 * /transaksi/jadwal/{jadwalId}:
 *   get:
 *     summary: Get transaksi by jadwalId
 *     tags: [Transaksi]
 *     parameters:
 *       - in: path
 *         name: jadwalId
 *         schema:
 *           type: string
 *         required: true
 *         description: The jadwal id
 *     responses:
 *       200:
 *         description: List of transaksi by jadwal
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Transaksi'
 */

