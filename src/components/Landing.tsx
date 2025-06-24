import Stack from "../blocks/Components/Stack/Stack"
import { useLocalStorage } from "usehooks-ts"
import LinkFlowBite from "./LinkFlowBite"
import { Datepicker } from "flowbite-react"


const Landing = () => {

	const [theme] = useLocalStorage('theme', 'dark')
	return (
		<>
			<div data-theme={theme} className="bg-white flex-col    dark:bg-navbar py-2 font">
				<div className="p-56 bg-[url(../src/assets/space.jpg)] bg-contain bg-size[100vw] font">
					<h1 className="flex justify-center text-8xl font-extrabold text-white ">Astronomy Adventure</h1>
				</div>
				<h1 className="flex justify-center text-5xl font-extrabold dark:text-white mt-16 mb-10">Astronomy Pictures of The Week</h1>

				<div className="flex justify-center ">
					<Stack />
				</div>
				<div className="flex justify-center">
					<LinkFlowBite linkText="Explore Astoronmy Pictures" linkTo="/apod" />
				</div>


				<div className="flex justify-center mt-16 mb-16">



					<div className="flex flex-col m-18">
						<h1 className="flex flex-start text-5xl font-extrabold dark:text-white mb-10 ">Favorites</h1>
						<p className="dark:text-white">Mark images as a favorite with the star button next to them. View the images later here.</p>
						<div className="flex flex-row">
							<div className="flex justify-center ">
								<LinkFlowBite linkText="Explore Favorites" linkTo="/favorites" />
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Landing;
