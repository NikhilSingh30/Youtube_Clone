import { useEffect,useState } from "react";
import {Youtube_URL} from "../assets/contant"
import Card from "./Card";
import { Link } from "react-router-dom";

const CardContainer = ()=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        fetchdata()
    },[])
    const fetchdata = async ()=> {
        const data = await fetch(Youtube_URL)
        const json = await data.json()
        setVideos(json.items)
        
    }
    return (
        <div className="flex flex-wrap gap-10 mt-5">
            {
                videos.map((video, index) => {
           return <Link to={"/watch?v=" +video.id } className="flex flex-wrap" key={index}><Card key={index} data={video}/></Link>
                })

            }
        </div>
    )
}
export default CardContainer;