import SchemaMG_Ct from "../models/model_ct"
import SchemaMG_Cl from "../models/model_cl"
import joi from "joi"

const SchemaJoi_ct=joi.object({
    name:joi.string().required(),
    id:joi.string(),
});

export const Allcategory=async(req,res)=>{
    try{
        const data = await SchemaMG_Ct.find();
        return res.json({message:"Tat ca du lieu ===>> ",data})
    }catch(error){return res.status(400).json("Try catch getAll CT.....")};
}
export const getOne_CT=async(req,res)=>{
    try{
        const data = await SchemaMG_Ct.findById(req.params.id);
        return res.json({message:"Lay ra 1 category ===>> ",data});
    }catch(error){return res.status(400).json("Try catch getOne CT.....")};
}
export const Create_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.create(body);
        return res.json({message:" Them 1 category ===>> ",data});
    }catch(error){return res.status(400).json("Try catch Create CT.....")};
}
export const Update_CT=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_ct.validate(body);
        if(error){return res.json(error.details[0].message)};

        const data=await SchemaMG_Ct.findByIdAndUpdate(req.params.id,body,{new:true});
        return res.json({message:" Cap nhat 1 category===>> ",data});
    }catch(error){return res.status(400).json("Try catch Update CT.....")};
}
export const Remove_CT=async(req,res)=>{
    try{
        const dataSuport=await SchemaMG_Cl.find();
        // // const length=dataSuport.length;
        const idCT=req.params.id;
        const data2=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data3=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data4=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data5=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data6=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data7=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data8=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data9=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data10=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data11=await SchemaMG_Cl.findOneAndDelete({categoryID:idCT});
        const data=await SchemaMG_Ct.findByIdAndDelete(idCT);
        return res.json({message:"category va products successfully ===>> ",data,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11});
    }catch(error){return res.status(400).json("Try catch Remove CT.....")};
}