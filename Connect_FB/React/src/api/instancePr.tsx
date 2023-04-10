import axios from "axios"

const instancePr=axios.create({
    baseURL:"http://localhost:8080/pr"
});
const jwt="Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDMzYTZjYzBmY2VjM2EwZDViMDg4NTgiLCJpYXQiOjE2ODExMzcwMDgsImV4cCI6MTY4MjAwMTAwOH0.46nzAy0XYM7RZJsH9YxeZmQ8zTNd-5xyNrBsxoOEQmU";
 interface Product{
    _id:string,
    id:string,
    name:string,
    price:number,
    image:string,
    desc:string,
 };

export const getAll=()=>{
    return instancePr.get("/");
};
export const getOne=(_id:string)=>{
    return instancePr.get("/"+_id);
};
export const Create=(data:Product)=>{
    return instancePr.post("/",data,{
        headers:{
            Authorization:jwt,
        }
    });
};
export const Update=(data:Product)=>{
    return instancePr.put("/"+data.id,data,{
        headers:{
            Authorization:jwt,
        }
    });
};
export const Remove=(_id:string)=>{
    return instancePr.delete("/"+_id,{
        headers:{
            Authorization:jwt,
        },
    });
};
