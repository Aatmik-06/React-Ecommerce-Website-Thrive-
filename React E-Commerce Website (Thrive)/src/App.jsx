import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home"
import About from "./Components/About";
import Shop from "./Components/Shop";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import Faqs from "./Components/Pages/Faqs";
import Virtual from "./Components/Virtual";
import Phones from "./Components/phones";
import Wireless from "./Components/Wireless";
import Computers from "./Components/Computers";
const App=()=>{
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="/Home" element={<Home/>}/>
      <Route path="/About" element={<About/>}/>
      <Route path="/Shop" element={<Shop/>}/>
      <Route path="/ContactUS" element={<ContactUs/>}/>
      <Route path="/Cart" element={<Cart/>}/>
      <Route path="/Faqs" element={<Faqs/>}/>
      <Route path="/Phones" element={<Phones/>}/>
      <Route path="/Virtual" element={<Virtual/>}/>
      <Route path="/Wireless" element={<Wireless/>}/>
      <Route path="/Computers" element={<Computers/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
