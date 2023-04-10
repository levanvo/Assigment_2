import axios from "axios";
import { Account } from "../page/layout/typeAll/type";

const instanceAT=axios.create({
    baseURL:"http://localhost:8080"
});

export const Signup=(data:Account)=>{
    return instanceAT.post("/signup",data);
};
export const Signin=(data:Account)=>{
    return instanceAT.post("/signin",data);
};
export const getOneAccount=(data:any)=>{
    return instanceAT.get(`/getoneAccount`,data);
}
export const getAllAccount=()=>{
    return instanceAT.get(`/getallAccount`);
}

// ,{
//     headers:{
//         Authorization:jwtCT,
//     }
// }