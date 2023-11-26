export default function Product(props) {
    return (
        <div>
			<a href="#" className="block h-64 rounded-lg shadow-lg bg-white"><img src={props.image} className="w-full h-full object-cover rounded-lg" /></a>
			<div className="flex items-center justify-between mt-3">
				<div>
					<a href="#" className="font-medium">{props.name}</a>
					<a className="flex items-center" href="#">
						<span className="text-xs font-medium text-gray-600">by</span>
						<span className="text-xs font-medium ml-1 text-[#91827d]">{props.store}</span>
					</a>
				</div>
				<div className="flex items-center h-8 w-fit bg-[#91827d] rounded -ml-4"><span className="text-sm text-white     px-2">{props.price}</span></div>
			</div>
		</div>
        )

}