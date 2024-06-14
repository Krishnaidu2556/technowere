import { BrowserRouter, Route, Routes } from "react-router-dom";
import Flight from "./Compnonents/Flight";
import Header from "./Compnonents/Header";
import Details from "./Compnonents/Details";


function App() {
  return (
    <>
   <BrowserRouter>
   <Routes>
    <Route path="/"  element={<><Header/><Flight/></>}></Route>
    <Route path="dashboard"  element={<><Header/><Details/></>}></Route>

   
   </Routes>
   
   </BrowserRouter>

   </>
  );
}

export default App;
