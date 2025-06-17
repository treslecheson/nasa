const Navbar = () => {

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
		</nav>

	)
}

export default Navbar;
