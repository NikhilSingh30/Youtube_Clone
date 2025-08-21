import {Link} from "react-router-dom"
const VideoCard = (props)=>{
    
    
    return (
        <div className="flex w-full pl-5 pr-10 gap-3">
            <Link to={"/display?v="+props?.data?.id?.videoId}>
            <div>
                <img src={props?.data?.snippet?.thumbnails?.medium?.url} alt="" className=" rounded-lg cursor-pointer"/>
                </div>
                </Link>
                <div className="flex flex-col gap-3">
                       <p className="font-semibold text-lg">{props?.data?.snippet?.title}</p>
                        <p>{props?.data?.snippet?.channelTitle}</p>
                        <p className="text-sm">{props?.data?.snippet?.description}</p>
                </div>
        </div>
    )
}
export default VideoCard;