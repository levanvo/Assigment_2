import axios from "axios";

const instanceCT=axios.create({
    baseURL:"http://localhost:8080/ct"
});
const jwtCT="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzYTZjYzBmY2VjM2EwZDViMDg4NTgiLCJpYXQiOjE2ODExMzcwMDgsImV4cCI6MTY4MjAwMTAwOH0.46nzAy0XYM7RZJsH9YxeZmQ8zTNd-5xyNrBsxoOEQmU";
 interface Product{
    _id:string,
    id:string,
    name:string,
 };
export const getAll_CT=()=>{
    return instanceCT.get("/");
};
export const getOne_CT=(_id:string)=>{
    return instanceCT.get("/"+_id);
};
export const Create_CT=(data:Product)=>{
    return instanceCT.post("/",data,{
        headers:{
            Authorization:jwtCT,
        }
    });
};
export const Update_CT=(data:Product)=>{
    return instanceCT.put("/"+data.id,data,{
        headers:{
            Authorization:jwtCT,
        }
    });
};
export const Remove_CT=(_id:string)=>{
    return instanceCT.delete("/"+_id,{
        headers:{
            Authorization:jwtCT,
        },
    });
};
