import joi from "joi"
import SchemaMG_cl from "../models/model_cl"
import SchemaMG_ct from "../models/model_ct"

const SchemaJoi_cl=joi.object({
    id:joi.string(),
    name:joi.string().required(),
    price:joi.number().required(),
    image:joi.string().required(),
    desc:joi.string().required(),
    categoryID:joi.string().required(),
});

export const getAll=async (req,res)=>{
    try{
        const body=req.body;
        const data=await SchemaMG_cl.find().populate("categoryID");
        // const nameCT=data.categoryID.name;
        return res.status(200).json(data);
    }catch(error){return res.status(400).json("Try Catch client Error getAll !!!")};
}
export const getOne=async (req,res)=>{
    try{
        const body=req.body;
        const data=await SchemaMG_cl.findById(req.params.id);
        return res.status(200).json({message:"Tìm thấy 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try Catch client Error getOne !!!")};
}
export const Create=async (req,res)=>{
    try{
        const body=req.body;
        const {error}=SchemaJoi_cl.validate(body);
        if(error){
            const show=error.details[0].message;
            return res.status(400).json(show);
        };
        const data=await SchemaMG_cl.create(body);
        await SchemaMG_ct.findByIdAndUpdate(data.categoryID,{
            $addToSet:{
                products:data._id,
            },
        });
        return res.status(200).json({message:"Đã thêm 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try Catch client Error Create !!!")};
}
export const Update=async (req,res)=>{
    try{
        const body=req.body;
        const {error}=SchemaJoi_cl.validate(body);
        if(error){
            const show=error.details[0].message;
            return res.status(400).json(show);
        };
        const data=await SchemaMG_cl.findByIdAndUpdate(req.params.id,body,{new:true});
        return res.status(200).json({message:"Đã cập nhật 1 ===>> ",data});
    }catch(error){return res.status(400).json("Try Catch client Error Update !!!")};
}
export const Remove=async (req,res)=>{
    try{
        const body=req.body;
        const data=await SchemaMG_cl.findByIdAndDelete(req.params.id);
        if(!data){return res.json("Không tồn tại hoặc đã bị xóa rồi !!")};
        return res.status(200).json({message:"Đã xóa 1 ===>> ",data});
    }catch(error){return res.status(400).json({message:"Try Catch client Error Remove !!!",error:error.message})};
}