import express from "express"
import { Allcategory, Create_CT, Remove_CT, Update_CT, getOne_CT } from "../controllers/control_ct";
import { CheckMission } from "../middles/middle";

const router_ct=express.Router();

router_ct.get("/ct",Allcategory);
router_ct.get("/ct/:id",getOne_CT);
router_ct.post("/ct",CheckMission,Create_CT);
router_ct.put("/ct/:id",CheckMission,Update_CT);
router_ct.delete("/ct/:id",CheckMission,Remove_CT);

export default router_ct;