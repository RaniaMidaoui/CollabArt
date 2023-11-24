export default function Author(props){
    return(
        <div className="flex gap-2">
                    <img src={"https://ui-avatars.com/api/?name="+props.name} alt="avatar" className="w-5 h-5 border rounded-3xl" />
                    <span className="text-gray-800 text-sm text-gray-100">{props.name}</span>
        </div>
    )
}