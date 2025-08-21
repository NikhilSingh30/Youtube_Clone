import Store from "../assets/Redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Sidebar = ()=>{
    const items = useSelector(Store => Store.cart.isshow);
    console.log(items)
    return(
        <> 
        {
            items && <div className="w-60 h-screen flex flex-col sticky top-0">
                        <div className="p-4 ">
                           <Link to="/">
                            <div className=" bg-gray-100 hover:bg-gray-200 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="font-semibold">🏠︎</p>
                               <p className="text-md font-semibold">Home</p>
                            </div>
                            </Link>

                             <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="font-semibold">🎬︎</p>
                               <p className="text-md ">Shorts</p>
                            </div>
                             <div className=" hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">📺︎</p>
                               <p className="text-md ">Subscriptions</p>
                            </div>
                            <div className="h-[2px] bg-gray-100 mt-3"></div>

                            
                            
                        </div>

                        <div className="px-4 ">
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">🕒</p>
                               <p className="text-md ">History</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">📝︎</p>
                               <p className="text-md ">Playlist</p>
                            </div>
                             <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">▶︎</p>
                               <p className="text-md ">Your videos</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">🎬︎</p>
                               <p className="text-md ">Your movies</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">🎓︎</p>
                               <p className="text-md ">Your courses</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">🔖︎</p>
                               <p className="text-md ">Watch later</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">💖︎</p>
                               <p className="text-md ">Liked videos</p>
                            </div>
                            <div className="  hover:bg-gray-100 cursor-pointer h-12 flex items-center gap-4 pl-3 rounded-xl"> 
                               <p className="">📥︎</p>
                               <p className="text-md ">Downloads</p>
                            </div>
                            <div className="h-[2px] bg-gray-100 mt-3"></div>
                        </div>
                        

                                
                        
                </div>
        }
        
     </>
         
    )
        
       
    
}
export default Sidebar;