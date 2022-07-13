import express from "express";
import { getTime } from "./lib/utils";
import Persona from "./Persona";
import { Request, Response, Application } from 'express'

const p: Persona = new Persona("Coder", "House");

const app: Application = express();

app.get("/", (req: Request, res: Response): void => {
    res.send({
    time: getTime(),
    name: p.getFullName(),
    });
});

const PORT:number = 8080;
app.listen(PORT, (): void => {
    console.log(`conectado al puerto: ${PORT}`);
});
