import Sidebar from "./Sidebar";
import Mainsec from "./Mainsec";
import { Outlet } from "react-router-dom";
const Body = () =>{
    return (
        <div className="flex mt-5  gap-2">
            <Sidebar />
            <div className="h-screen flex-1 overflow-y-auto">
            <Outlet />
            </div>
        </div>
    )
}
export default Body;