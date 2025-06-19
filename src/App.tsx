import { useEffect, useState } from "react"
import Stack from "./blocks/Components/Stack/Stack"
import Link from "./components/Link"
import Navbar from "./components/Navbar"








const App = () => {

	const [theme, setTheme] = useState<string>("light")

	useEffect(() => {
		let currentTheme = localStorage.getItem("theme") || "light"
		setTheme(currentTheme)
	})






	return (
		<>

			<Navbar />

			<div data-theme={theme} className="bg-white flex-col  p-10  dark:bg-primary py-2 font">
				<div className="p-56 bg-[url(../src/assets/space.jpg)] bg-cover font">
					<h1 className="flex justify-center text-8xl font-extrabold text-white ">Astronomy Adventure</h1>
				</div>
				<h1 className="flex justify-center text-5xl font-extrabold dark:text-white mt-16 mb-10">Astronomy Pictures of The Week</h1>

				<div className="flex justify-center ">
					<Stack />
				</div>
				<div className="flex justify-center">
					<Link linkText="Explore Astoronmy Pictures" />
				</div>


				<div className="flex justify-center mt-16 mb-16">
					<div className="flex flex-col m-18">
						<h1 className="flex flex-start text-5xl font-extrabold dark:text-white mb-10">Mars</h1>
						<p className="dark:text-white">Mars is the fourth planet from the Sun in our solar system. Often called the "Red Planet" because of its reddish appearance due to iron oxide (rust) on its surface. Here you can explore pictures of Mars and it's rovers.</p>
						<div className="flex flex-row">
							<div className="flex justify-center ">
								<Link linkText="Explore Mars" />
							</div>
						</div>
					</div>



					<div className="flex flex-col m-18">
						<h1 className="flex flex-start text-5xl font-extrabold dark:text-white mb-10 ">Favorites</h1>
						<p className="dark:text-white">Mark images as a favorite with the star button next to them. View the images later here.</p>
						<div className="flex flex-row">
							<div className="flex justify-center ">
								<Link linkText="Explore Favorites" />
							</div>
						</div>
					</div>
				</div>

			</div>

		</>

	)
}






export default App;
