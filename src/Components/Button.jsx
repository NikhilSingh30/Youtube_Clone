const  Button = (props)=> {
    return (
        <button className="px-3 py-1 bg-gray-100 font-semibold rounded-lg cursor-pointer">
            {props.data}
        </button>
    )
}
export default Button