import  express from "express";

import morgan from "morgan";
import cors from "cors";
import bodyparser from "body-parser";
const app = new express();

app.set("PORT",process.env.PORT || 3000);

app.use(morgan("dev"));
app.use(cors());
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
module.exports = app;
