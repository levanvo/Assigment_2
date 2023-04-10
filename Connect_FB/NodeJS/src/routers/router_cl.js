import express from "express"
import { Create, getAll, getOne, Remove, Update } from "../controllers/control_cl";
import { CheckMission } from "../middles/middle";

const router_cl=express.Router();

router_cl.get("/pr/",getAll);
router_cl.get("/pr/:id",getOne);
router_cl.post("/pr/",CheckMission,Create);
router_cl.put("/pr/:id",CheckMission,Update);
router_cl.delete("/pr/:id",CheckMission,Remove);

export default router_cl;