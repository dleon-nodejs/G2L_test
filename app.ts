import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import { router } from "./routes"
 
class App {
    public server: any
    constructor(){
        this.server = express()
        this.middlewares()
        this.routes()
    }
    middlewares(){
        this.server.disable("x-powered-by")
        this.server.use(bodyParser.json()) 
        this.server.use(cors({
            origin: process.env.CORS_ORIGIN
        }))
    }
    routes(){
        this.server.use("/api", router)
    }
}

export default new App().server