import mongoose from "mongoose"

const SchemaMG_ct = mongoose.Schema({
    name: String,
    products:[{
        type:mongoose.Types.ObjectId,
        // ref:"connect"
        ref:"products"
    }]
}, { timestamps: true, versionKey: false });

export default mongoose.model("assigment_cts",SchemaMG_ct);