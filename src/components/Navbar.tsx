import { useEffect, useState } from "react";

const Navbar = () => {

	const [theme, setTheme] = useState<string>("dark")

	const changeTheme = () => {
		console.log(localStorage.getItem("theme"))
		if (localStorage.getItem("theme") === "light") {
			setTheme("dark")
			localStorage.setItem("theme", JSON.stringify(theme))
		} else {
			setTheme("light")
			localStorage.setItem("theme", JSON.stringify(theme))
		}
	}


	return (


		<nav className="p-4 flex-no-wrap lg-10 z-10 fixed top-0 flex w-full justify-between bg-navbar py-2 ">
			<a href="/" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
				<img src="../../public/space.png" width="25px" height="25px" />
			</a>
			<div className="justify-center lg-10 py-2">
				<a href="/apod" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
					APOD
				</a>
				<a href="/mars" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
					Mars
				</a>
				<a href="/favorites" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
					Favorites
				</a>
			</div>
			<div >

				<button type="button" onClick={changeTheme} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">Switch</button>
			</div>
		</nav>

	)
}

export default Navbar;
