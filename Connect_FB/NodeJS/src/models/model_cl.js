import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const SchemaMG_cl=mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    desc:String,
    categoryID:{
        type:mongoose.Types.ObjectId,
        ref:"assigment_cts"
    }
},{timestamps:true,versionKey:false});
SchemaMG_cl.plugin(mongoosePaginate);
export default mongoose.model("assigment_cls",SchemaMG_cl);