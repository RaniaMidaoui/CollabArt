import Footer from "../Footer/Footer"
import Product from "./marketItem"
import Navbar from "../Navbar/Navbar";
import NavbarResponsive from "../NavbarResponsive/NavbarResponsive";
import { useState } from "react";

export default function Marketplace() {
    const [hamActive, setHamActive] = useState(false);

 return (   
    <div className="Courses">
    <Navbar hamActive={hamActive} setHamActive={setHamActive} />
    <NavbarResponsive hamActive={hamActive} />
    <div className="flex flex-col w-screen min-h-screen p-10 text-gray-800 mx-24">
	<h1 className="text-3xl">Collab'Art Exhibit</h1>
	<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mt-6">
		<span className="text-sm font-semibold">1-16 of 148 Products</span>
		<button className="relative text-sm focus:outline-none group mt-4 sm:mt-0">
			<div className="flex items-center justify-between w-40 h-10 px-3 border-2 border-gray-300 rounded hover:bg-gray-300">
				<span className="font-medium">
					Popular
				</span>
				<svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
					<path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
				</svg>
			</div>
			<div className="absolute z-10 flex-col items-start hidden w-full pb-1 bg-white shadow-lg rounded group-focus:flex">
				<a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Popular</a>
				<a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Featured</a>
				<a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Newest</a>
				<a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Lowest Price</a>
				<a className="w-full px-4 py-2 text-left hover:bg-gray-200" href="#">Highest Price</a>
			</div>
		</button>
	</div>
	<div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 w-full mt-6">
		<Product name="Vintage Rose Vase" store="VinMart" price="59 TND" image="https://m.media-amazon.com/images/I/61IUyiIFNGL._AC_UF894,1000_QL80_.jpg"/>
        <Product name="Turkish Clay Bowl" store="Turkisart" price="29 TND" image="https://i.etsystatic.com/11439011/r/il/994966/3490599183/il_570xN.3490599183_cqn3.jpg"/>
		<Product name="Tunisian Carpet" store="Jasmins" price="69 TND" image="https://i.etsystatic.com/20331717/r/il/16b990/4602360218/il_300x300.4602360218_lzzh.jpg" />
		<Product name="Small Basket" store="Jasmins" price="49 TND" image="https://mljcpq5dyf4t.i.optimole.com/cb:KXiG.26301/w:595/h:595/q:mauto/ig:avif/f:best/https://tunisia-market.com/wp-content/uploads/2023/01/9E15B821-3BA0-4530-BA9E-25C616FBD182.jpeg" />
		<Product name="Homemade Clay Drum" store="TunisianArt" price="39 TND" image="https://thumbs.dreamstime.com/b/congo-drum-25353825.jpg" />
		<Product name="Jebba" store="TunisianArt" price="109 TND" image="https://zaherkammoun.com/wp-content/uploads/2021/06/jebba-Testour-scaled.jpg" />
		<Product name="Vivid Cermaics" store="VinMart" price="89 TND" image="https://ik.imagekit.io/theartling/prod/original_images/Screenshot_2019-07-25_at_1.55.39_PM.png?tr=w-825,h-600,c-at_max,bg-FFFFFF" /> 
		<Product name="Moroccan Cushions" store="MoroccanArt" price="39 TND" image="https://lostlover.com/cdn/shop/products/VintageMoroccanCushion-DesertSun1.jpg?v=1621921336" />
	</div>
    </div>
    <Footer/>
    </div>
    )
}