const Card = (props)=>{
    
    
   
    
    
    return (
        
        <div className="w-80 p-3 shadow-xl hover:shadow-2xl rounded-md cursor-pointer">
            <img src={props?.data?.snippet?.thumbnails?.medium?.url} alt="" className="rounded-md "/>
            <p className="font-semibold">{props?.data?.snippet?.title}</p>
            <p>{props?.data?.snippet?.channelTitle}</p>
            <p>{props?.data?.statistics?.viewCount} views</p>
            
        </div>
    )
}
export default Card