import express  from "express";
import route from "./Router/admin.routes.js";
import './Db/connecting.js'
import cors from 'cors'

const app = express();

app.use(cors())

const port = 3020;

app.use(express.json());
app.use(route)

app.listen(3020)
console.log("server invoked at http://localhost:3020");