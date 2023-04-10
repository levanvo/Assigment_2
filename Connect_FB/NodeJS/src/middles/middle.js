import jwt from "jsonwebtoken"
import SchemaMG_at from "../models/model_at"

export const CheckMission=async(req,res,next)=>{
    try{
        const look=req.headers.authorization;
        if(!look){return res.json("Bạn chưa đăng nhập ??")};

        const data1=look.split(" ")[1];
        const {_id}=await jwt.verify(data1,"hello");
        const getData=await SchemaMG_at.findById(_id);
        // console.log(getData);
        // khu vực này rối================================================ (Hãy thêm key role ở model_author).
        if(getData.role!=="admin"){
            return res.json("Bạn không có quyền Admin");
        };
        // khu vực này rối================================================ (Hãy thêm key role ở model_author).
        next();
    }catch(error){return res.json(error.message)}
}