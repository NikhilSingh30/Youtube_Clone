import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { hidesidebar } from "../assets/cartSlice";
const Display_Video_Card = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(hidesidebar())

    }, [])
    const [videoid] = useSearchParams()
    return (
        <div className="p-5">
            <iframe width="750" height="460" src={"https://www.youtube.com/embed/" + videoid.get("v")} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}
export default Display_Video_Card;