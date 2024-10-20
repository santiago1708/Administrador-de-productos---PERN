import express from "express";
import router from './routes'
import colors from 'colors'
import db from "./config/db";

//conectar base de datos
async function connectDB() {
    try {
        await db.authenticate()
        db.sync()
        console.log(colors.cyan.bold('Se conecto de manera correcta'));
        
    } catch (error) {
        console.log(error);
        console.log(colors.bgRed.bold('Hubo un error al conectar a la base de datos'));
    }
}

connectDB()
const server = express()

server.use('/api/products', router)

// Iniciando el server

export default server