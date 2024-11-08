import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber";


const Root = () => {
  return (
    <div>
         <Navbar></Navbar>
       
      <div className="min-h-[calc(100vh-80px)]">
        <Outlet></Outlet>
      </div>

      
    </div>
  );
};

export default Root;