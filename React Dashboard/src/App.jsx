import { BrowserRouter , Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from './Components/Home';
import ViewProducts from './Components/ViewProducts';
import AddProducts from "./Components/AddProducts";
import UpdateProducts from "./Components/UpdateProducts";
import SearchProducts from "./Components/SearchProducts";
import Login from "./Components/Login";
// import { message } from 'antd';
 const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="Home" element={<Home/>} />
        <Route path="ViewProducts" element={<ViewProducts/>} />
        <Route path="AddProducts" element={<AddProducts/>} />
        <Route path="UpdateProducts" element={<UpdateProducts/>} />
        <Route path="SearchProducts" element={<SearchProducts/>} />
        <Route path="editrec/:myid" element={<UpdateProducts/>} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
