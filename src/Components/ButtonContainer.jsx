import Button from "./Button";
const ButtonContainer = ()=>{
    const array1 = ["All", "Music", "Music", "Nikhil", "Aditya", "Nikhil45", "T-Series", "Pawan Singh", "Mixes", "News", "Albums", "Gaming", "Cricket", ]
    return (
        <div className="flex gap-5 ">
            {
                array1.map((val,index)=>{
                    return <Button key={index} data={val}/>
                })
            }
        </div>
    )
}
export default ButtonContainer;