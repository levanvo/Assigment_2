export interface Data {
    id?:string,
    _id?: string,
    name?: string,
    price?: number,
    image?: string,
    desc?: string,
    categoryID?:object,
};
export interface Data_PR_and_CT{
    data:Data,
    dataCT:DataCT
}
export interface Props {
    data: Data[],
    onUpdate: (data: Data) => void
};
export interface Pr_Ct_onUpdate {
    data: Data[],
    dataCT:DataCT,
    onUpdate: (data: Data) => void
};
export interface Ipop{
    data:Data[]
};
export interface PropsAdd {
    onAdd: (data: Data) => void;
};
// management
export interface IProps {
    data: Data[],
    onRemove: (id: string) => void,
};
// management
export interface DataCT{
    _id?:string,
    id?:string,
    name?:string,
};
export interface ArrayCT_add {
    onAddCT: (data: DataCT) => void;
};
export interface ArrayCT_update {
    data: DataCT[],
    onUpdateCT: (data: DataCT) => void
};
export interface ArrayCT_remove {
    data: DataCT[],
    onRemoveCT: (id: string) => void,
    dataCT:any
};
export interface ArrayCT{
    data:DataCT[]
};
// 
export interface AddPr_DataCT{
    onAdd: (data: Data) => void;
    dataCT:DataCT
}
// author
export interface Account{
    _id?:string,
    id?:string,
    name?:string,
    email?:string,
    pass?:string,
};
export interface dataAccount_Register{
    onRegister:(data:Account)=>void,
}