import express from "express"
import { Signin, Signup, getAllAccount, getOneAccount } from "../controllers/control_at";

const router_at=express.Router();

router_at.post("/signin",Signin);
router_at.post("/signup",Signup);
router_at.get("/getoneAccount",getOneAccount);
router_at.get("/getallAccount",getAllAccount);

export default router_at;