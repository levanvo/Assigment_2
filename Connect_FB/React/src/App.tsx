import { useState, useEffect } from 'react'
import { Routes, Route,BrowserRouter, Link } from 'react-router-dom'
import { Create, getAll, Remove, Update } from './api/instancePr'
import { Create_CT, getAll_CT, Remove_CT, Update_CT } from './api/instanceCt'
// ====
import HomeClient from './page/client/HomeClient'
import UpdatePr from './page/admin/UpdatePr'
import LayoutAdmin from "./page/layout/LayoutAdmin"
import HomeAdmin from './page/admin/HomeAdmin'
import Management from './page/admin/Management'
import LayoutClient from './page/layout/LayoutClient'
import DetailPr from './page/client/DetailPr'
import Setup from './page/admin/Setup'
import Achievement from './page/admin/Achievement'
import Category from './page/admin/Category/Category'
import DashBoard from './page/admin/DashBoard'
import AddPr from './page/admin/AddPr'
import { Ipop } from './page/layout/typeAll/type'
import AddCt from './page/admin/Category/AddCt'
import UpdateCT from './page/admin/Category/UpdateCt'
import Verify_Admin from './page/Verify_Admin'
import Register_Admin from './page/Register_Account'
import { Signup } from './api/instanceAt'

function App() {
  // PR
  const [getData, setData] = useState<Ipop[]>([])
  useEffect(() => {
      getAll().then(({ data }) => setData(data));
  }, [])
  // CT
  const [getDataCT, setDataCT] = useState<Ipop[]>([])
  useEffect(() => {
      getAll_CT().then(({ data }) => setDataCT(data.data));
  }, [])
  function Home(){
    return(
      <div className="Home">
        <Link to={'login'}><button className='glowing-btn'><span className='glowing-txt'>A<span className='faulty-letter'>d</span>min</span></button></Link>
        <h1 className='h111'></h1>
        <Link to={'client'}><button className='glowing-btn'><span className='glowing-txt'>Cl<span className='faulty-letter'>ie</span>nt</span></button></Link>
      </div>
    )
  }
  // Products Handle
  const onRemove = async(_id: string) => {
    await Remove(_id);
    const see=getData.filter((y:any)=>y._id!=_id);
    setData(see);
  }
  function onUpdate(data:any){
    const see=getData.filter((t:any)=>t._id!=data.id);
    setData([...see,{...data}]);
    Update(data);
  }
  function onAddPr(data:any){
    setData([...getData,{...data}]);
    Create(data)
  }
  // Category Handle
  function onRemoveCT(_id:string){
    Remove_CT(_id);
    const see=getDataCT.filter((y:any)=>y._id!=_id);
    setDataCT(see);
  }
  function onAddCT(data:any){
    setDataCT([...getDataCT,{...data}]);
    Create_CT(data);
  }
  function onUpdateCT(data:any){
    const see=getDataCT.filter((t:any)=>t._id!=data.id);
    setDataCT([...see,{...data}]);
    Update_CT(data);
  }
  function onRegister(data:any){
    Signup(data);
    console.log(data);
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LayoutClient />}>
            <Route index element={<HomeClient data={getData}/>}/>
            <Route path='detailPr/:id' element={<DetailPr data={getData}/>}/>
          </Route>
          <Route path='register' element={<Register_Admin onRegister={onRegister}/>}/>
          <Route path='login' element={<Verify_Admin/>}/>
          <Route path='layout' element={<LayoutAdmin />}>
              <Route index element={<HomeAdmin/>}/>
  {/* Products */}
              <Route path='management'>
                <Route index element={<Management data={getData} onRemove={onRemove}/>}/>
                <Route path='update/:id' element={<UpdatePr data={getData} onUpdate={onUpdate} dataCT={getDataCT}/>}/>
                <Route path='add' element={<AddPr onAdd={onAddPr} dataCT={getDataCT}/>}/>

                <Route path='setUp' element={<Setup/>}/>
                <Route path='achieVement' element={<Achievement/>}/>
                <Route path='dashBoard' element={<DashBoard/>}/>
              </Route>
  {/* Category */}
              <Route path='category'>
                <Route index element={<Category dataCT={getDataCT} onRemoveCT={onRemoveCT}/>}/>
                <Route path='addCt' element={<AddCt onAddCT={onAddCT} />}/>
                <Route path='updateCt/:id' element={<UpdateCT onUpdateCT={onUpdateCT} />}/>
              </Route>
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App