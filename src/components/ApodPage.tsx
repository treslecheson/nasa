import Navbar from "../components/Navbar"
import { useLocalStorage } from "usehooks-ts"
import { useState } from "react";
import { Datepicker } from "flowbite-react";


const apiKey = import.meta.env.VITE_NASA_API_KEY
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


const defaultExplanation: string = "Have you ever watched a lightning storm in awe? Join the crowd. Oddly, details about how lightning is produced remains a topic of research. What is known is that updrafts carry light ice crystals into collisions with larger and softer ice balls, causing the smaller crystals to become positively charged. After enough charge becomes separated, the rapid electrical discharge that is lightning occurs. Lightning usually takes a jagged course, rapidly heating a thin column of air to about three times the surface temperature of the Sun. The resulting shock wave starts supersonically and decays into the loud sound known as thunder. Lightning bolts are common in clouds during rainstorms, and on average 44 lightning bolts occur on the Earth every second. Pictured, over 60 images were stacked to capture the flow of lightning-producing storm clouds in July over Colorado Springs, Colorado, USA. Follow APOD in English on: Facebook, Instagram, or Twitter"


type ApodResponse = {
	url: string;
	explanation: string;
	date: string;
	title: string;
}



const defaultResponse: ApodResponse = { url: "../../src/assets/LightningStorm_Randall_1080.jpg", explanation: defaultExplanation, date: "2020-09-27", title: "Lightning over Colorado" }

const ApodApp = () => {
	const [theme] = useLocalStorage('theme', 'dark')
	const [date, setDate] = useState(new Date);
	const [data, setData] = useState<ApodResponse>(defaultResponse)
	const [favsObject, setFavsObject] = useState<ApodResponse>(defaultResponse)
	const [favs, setFavs] = useLocalStorage<ApodResponse>('favs', defaultResponse)


	function getFormattedDate(date: Date): string {
		const year = date.getFullYear();
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const day = date.getDate().toString().padStart(2, '0');

		return `${year}-${month}-${day}`;
	}



	const onSubmit = async () => {
		console.log(date.toUTCString())

		try {
			const response = await fetch(`${apiURL}&date=${getFormattedDate(date)}`)
			if (!response.ok) {
				throw new Error(`Response status: ${response.status}`)
			}

			const json: ApodResponse = await response.json()
			setData(json)
			setFavsObject(json)


		} catch (error) {
			console.error(error.message)
		}
	}

	const submitFav = () => {


		setFavs(favsObject)


	}


	return (
		<div className="">
			<Navbar />
			<div data-theme={theme} className="bg-white flex-col    dark:bg-navbar py-2 font">
				<div className="p-56 bg-[url(../src/assets/space.jpg)] bg-contain bg-size[100vw] font">
					<h1 className="flex justify-center text-7xl font-extrabold text-white ">Astronomy Picture of the Day</h1>
				</div>



				<section className="grid grid-cols-2 gap-4">
					<div className="flex flex-col justify-center align-items m-16">
						<h2 className="flex justify-center text-5xl font-extrabold dark:text-white text-black mb-10"> APOD </h2>
						<h3 className="flex justify-center text-2xl font-extrabold dark:text-white text-black mb-5">Choose a date</h3>
						<div className="flex justify-center">
							<Datepicker onChange={(date) => setDate(date)} />
							<button type="button" onClick={onSubmit} className="text-white ml-4 mr-4 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
						</div>

						<button type="button" onClick={submitFav} className="text-white ml-4 mr-4 mt-8 bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Add to Favorites</button>
					</div>
					<div className="flex flex-col justify-center  m-16">
						<div className="flex justify-center m-2">
							<h2 className="flex justify-center text-3xl font-extrabold dark:text-white text-black mb-10 ">{data?.title}</h2>
						</div>
						<div className="flex justify-center">
							<img src={data?.url} height="50%" width="50%" />
						</div>
						<h4 className="flex justify-center text-2xl font-extrabold dark:text-white text-black mb-10  mt-8">{data?.date}</h4>
						<p className="flex justify-center font-extrabold dark:text-white text-black mb-10">{data?.explanation} </p>
					</div>
				</section >
			</div >



		</div>

	)
}






export default ApodApp;
