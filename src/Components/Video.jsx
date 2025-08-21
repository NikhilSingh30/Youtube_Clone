import { useSelector } from "react-redux";
import { Video_by_Search2 } from "../assets/contant";
import { Video_by_Search1 } from "../assets/contant";
import { useEffect, useState } from "react";
import VideoCard from "./VideoCard";

const Video= () => {
  const query = useSelector((state) => state.search.query);
  const link = Video_by_Search1 + query + Video_by_Search2;
  const [queryText , setqueryText] = useState(query)
  const [videoList, setvideoList] = useState([]);

  useEffect(()=>{
     const timer = setTimeout(() => fetchdata(), 200);
    return () => clearTimeout(timer);
        
  },[query])

  const fetchdata = async ()=>{
    const  data  = await fetch(link);
    const json = await data.json();
    setvideoList(json.items)
  }

  return (
    <div className=" mt-5 flex flex-col gap-4 pb-5 ">
      {
          videoList.map((data1,index)=>{
             return <VideoCard data={data1} key={index}/>
      })
      }
      
     
     
    </div>
  );
};

export default Video;