import express from "express";
import winston from "winston";
import orderRouter from "./routes/order.routes.js";

const {combine, timestamp, label, printf} = winston.format;
const myFormat = printf(({level,message, label, timestamp}) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
});
global.logger = winston.createLogger({
    level: "silly",
    transports: [
        new(winston.transports.Console)(),
        new(winston.transports.File)({filename: "delivery.api.log"}),
    ],
    format: combine(
        label({ label: "delivery.api"}),
        timestamp(),
        myFormat
    )
});

const app = express();
app.use(express.json());
app.use("/delivery", orderRouter);

app.listen(3000, () => console.log("API Started!"));