import express from "express"
import mongoose from "mongoose"
import router_at from "./routers/router_at";
import router_cl from "./routers/router_cl";
import router_ct from "./routers/router_ct";
import cors from "cors"

const app=express();
app.use(express.json());
app.use(cors());

app.use(router_at);
app.use(router_cl);
app.use(router_ct)

mongoose.connect("mongodb://127.0.0.1:27017/assigment").then(()=>console.log("Ok running....")).catch(()=>console.log("Defeated...."));
export const viteNodeApp=app;