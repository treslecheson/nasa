import { useLocalStorage } from "usehooks-ts";
import Toggle from "./Toggle";
import { Link } from "react-router";

const Navbar = () => {



	const [theme] = useLocalStorage('theme', 'dark')

	return (


		<nav data-theme={theme} className="p-4 flex-no-wrap lg-10 z-10 fixed top-0   flex w-full justify-between bg-navbar dark:bg-primary py-2 ">
			<Link to="/" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
				<img src="../../public/space.png" width="25px" height="25px" />
			</Link>
			<div className="justify-center lg-10 py-2">
				<Link to="/apod" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
					APOD
				</Link>
				<Link to="/favorite" className="font-bold rounded-lg px-3 py-2 text-gray-50 hover:bg-gray-800 hover:text-gray-50">
					Favorite
				</Link>
			</div>
			<div >
				<Toggle />
			</div>
		</nav>

	)
}

export default Navbar;
