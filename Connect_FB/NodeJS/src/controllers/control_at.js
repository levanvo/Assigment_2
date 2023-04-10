import joi from "joi"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import SchemaMG_at from "../models/model_at"

const SchemaJoi_at_up=joi.object({
    name:joi.string().required().messages({
        "string.empty":"Không để trống name",
        "any.required":"Bắt buộc nhập name",
    }),
    email:joi.string().required().email().messages({
        "string.empty":"Không để trống email",
        "any.required":"Bắt buộc nhập email",
        "string.email":"Không đúng định dạng email"
    }),
    pass:joi.string().required().min(3).messages({
        "string.empty":"Không để trống pass",
        "any.required":"Bắt buộc nhập pass",
        "string.min":"Tối thiểu {#limit} kí tự trở lên"
    }),
    repass:joi.string().required().valid(joi.ref("pass")).messages({
        "string.empty":"Không để trống repass",
        "any.required":"Bắt buộc nhập repass",
        "any.only":"Không khớp mật khẩu"
    }),
});
const SchemaJoi_at_in=joi.object({
    email:joi.string().required().email().messages({
        "string.empty":"Không để trống email",
        "any.required":"Bắt buộc nhập email",
        "string.email":"Không đúng định dạng email"
    }),
    pass:joi.string().required().min(3).messages({
        "string.empty":"Không để trống pass",
        "any.required":"Bắt buộc nhập pass",
        "string.min":"Tối thiểu {#limit} kí tự trở lên"
    }),
    remember:joi.boolean(),
});

export const Signup=async(req,res)=>{
    try{
        const body=req.body;
        const {error}=await SchemaJoi_at_up.validate(body,{abortEarly:false});
        if(error){
            const show=error.details.map(t=>t.message);
            return res.json(show);
        }
        const checkEmail=await SchemaMG_at.findOne({email:body.email});
        if(checkEmail){return res.json("Đã tồn tại email, hãy đăng kí bằng email khác !!")};

        // const hashPass=await bcrypt.hash(body.pass,10);
        const data=await SchemaMG_at.create({
            name:body.name,
            email:body.email,
            pass:body.pass
        });
        const token=await jwt.sign({_id:data._id},"hello",{expiresIn:"10d"});
        return res.json({
            message:"Đăng kí thàng công !",
            data,
            token
        });
    }catch(error){return res.status(400).json("Try Catch error !!!")};
};
export const Signin=async (req,res)=>{
    try{
        const body=req.body;
        const {error}=SchemaJoi_at_in.validate(body,{abortEarly:false});
        if(error){
            const show=error.details.map(t=>t.message);
            return res.json(show);
        };
        const checkEmail=await SchemaMG_at.findOne({email:body.email});
        if(!checkEmail){return res.json("Email chưa đăng kí hoặc không tồn tại nữa !!")};

        // const getPass=await bcrypt.compare(body.pass,checkEmail.pass);
        if(body.pass!=checkEmail.pass){
            return res.json("Không trùng mật khẩu");
        };
        const token=await jwt.sign({_id:checkEmail._id},"hello",{expiresIn:"10d"});
        return res.json({
            message:"Đăng nhập thành công",
            checkEmail,
            token
        });
    }catch{return res.status(400).json("Try Catch Error !!!");}
};
// getOneAccount not usefull !
export const getOneAccount=async (req,res)=>{
    try{
        const body=req.body;
        const data=await SchemaMG_at.findOne({email:body.email});
        return res.json({message:"getOne Account ===> ",data});
    }catch(error){return res.status(400).json({message:"Error get one Account !",error:error.message})};
}
export const getAllAccount=async (req,res)=>{
    try{
        // const body=req.body;
        // const CreateNewId=[];//kho chứa các id
        // const CreateNewDatabase=[];//kho chứa các account được giải mã pass.
        // const test=[];
        // const data=await SchemaMG_at.find();
        // // Lọc từng account, tạo token và lọc ra 1 mảng chứa các _id ==> (lưu ý tạo token lấy id bởi ta cần decode mã pass).
        // data.map((dataOne)=>{
        //     const tokenOne=jwt.sign({_id:dataOne._id},"stepbystep",{expiresIn:"100d"});
        //     test.push(tokenOne)
        //     // const {_id}=jwt.verify(tokenOne,"stepbystep");
        //     // CreateNewId.push(_id);
        // });
        // for(let i=0;i<data.length;i++){
        //     const objectAllAcount=await SchemaMG_at.findById(CreateNewId[i]);
        //     CreateNewDatabase.push(objectAllAcount);
        // }
        // return res.json({message:"getAll Account ===> ",test});

        const data=await SchemaMG_at.find();
        return res.json({message:"getAll Account ===> ",data});
    }catch(error){return res.status(400).json({message:"Error get all Account !",error:error.message})};
}