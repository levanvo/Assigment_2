import mongoose from "mongoose"
import mongoosePaginate from "mongoose-paginate-v2"

const SchemaMG_at=mongoose.Schema({
    name:String,
    email:{
        type:String,
        required:true,
        unique:true
    },
    pass:{
        type:String||Number,
        required:true
    },
    role:{
        type:String,
        default:"client",
    },
})
export default mongoose.model("assigment_ats",SchemaMG_at);