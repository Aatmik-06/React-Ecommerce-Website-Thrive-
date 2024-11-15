import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Components/Layout";
import Home from "./Components/Home"
import About from "./Components/About";
import Shop from "./Components/Shop";
import ContactUs from "./Components/ContactUs";
import Cart from "./Components/Cart";
import Faqs from "./Components/Pages/Faqs";
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
      </Route>
    </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
