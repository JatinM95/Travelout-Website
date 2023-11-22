// import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import AboutUs from './pages/AboutUs'


export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='about' element={<AboutUs />} />
    </Routes>
    </BrowserRouter>
  )
}