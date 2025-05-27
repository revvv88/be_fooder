import express from 'express'
import cors from 'cors'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import path from 'path'

import UserRoute from './routers/userRoute'
import kelasKeretaRoute from './routers/kelasKeretaRoute'
import gerbongRoute from './routers/gerbongRoute'
import kursiRoute from './routers/kursiRoute'
import tiketRoute from './routers/tiketRoute'
import transaksiRoute from './routers/transaksiRoute'
import metodePembayaranRoute from './routers/metodePembayaranRoute'
import jadwalKeretaRoute from './routers/jadwalKeretaRoute'


import { PORT } from './global'

const app = express()
app.use(cors())
app.use(express.json())

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Ordering System API',
            version: '1.0.0',
            description: 'API documentation for the ordering system',
        },
        servers: [
            {
                url: `http://localhost:${PORT}`,
            },
        ],
        components: {
            securitySchemes: {
                bearerAuth: { // Nama skema keamanan
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT', // Format token
                },
            },
        },
        security: [{ bearerAuth: [] }],
    },
    apis: ['./src/routers/*.ts'], // Path to the API docs
};

const swaggerDocs = swaggerJsDoc(swaggerOptions)
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))


app.use(`/user`, UserRoute)
app.use(`/kelasKereta`, kelasKeretaRoute)
app.use(`/gerbong`, gerbongRoute)
app.use(`/kursi`, kursiRoute)
app.use(`/tiket`, tiketRoute)
app.use(`/transaksi`, transaksiRoute)
app.use(`/metodePembayaran`, metodePembayaranRoute)
app.use(`/jadwalKereta`, jadwalKeretaRoute)

// Set public folder as static
app.use(express.static(path.join(__dirname, '..', 'public')));

app.listen(PORT, () => {
    console.log(`[server]: Server is running at http://localhost:${PORT}`)
})