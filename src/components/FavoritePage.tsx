import { useLocalStorage } from "usehooks-ts"

type ApodResponse = {
	url: string;
	explanation: string;
	date: string;
	title: string;
}

const defaultExplanation: string = "Have you ever watched a lightning storm in awe? Join the crowd. Oddly, details about how lightning is produced remains a topic of research. What is known is that updrafts carry light ice crystals into collisions with larger and softer ice balls, causing the smaller crystals to become positively charged. After enough charge becomes separated, the rapid electrical discharge that is lightning occurs. Lightning usually takes a jagged course, rapidly heating a thin column of air to about three times the surface temperature of the Sun. The resulting shock wave starts supersonically and decays into the loud sound known as thunder. Lightning bolts are common in clouds during rainstorms, and on average 44 lightning bolts occur on the Earth every second. Pictured, over 60 images were stacked to capture the flow of lightning-producing storm clouds in July over Colorado Springs, Colorado, USA. Follow APOD in English on: Facebook, Instagram, or Twitter"


const defaultResponse: ApodResponse = { url: "../../src/assets/LightningStorm_Randall_1080.jpg", explanation: defaultExplanation, date: "2020-09-27", title: "Lightning over Colorado" }

const FavoritePage = () => {

	const [theme] = useLocalStorage('theme', 'dark')
	const [favs] = useLocalStorage<ApodResponse>('favs', defaultResponse)

	return (
		<>
			<div data-theme={theme} className="bg-white flex-col    dark:bg-navbar py-2 font">
				<div className="p-56 bg-[url(../src/assets/space.jpg)] bg-contain bg-size[100vw] font">
					<h1 className="flex justify-center text-8xl font-extrabold text-white ">Favorites</h1></div>
				<div className="flex flex-col justify-center  m-16">
					<div className="flex justify-center m-2">
						<h2 className="flex justify-center text-3xl font-extrabold dark:text-white text-black mb-10 ">{favs?.title}</h2>
					</div>
					<div className="flex justify-center">
						<img src={favs?.url} height="50%" width="50%" />
					</div>
					<h4 className="flex justify-center text-2xl font-extrabold dark:text-white text-black mb-10  mt-8">{favs?.date}</h4>
					<p className="flex justify-center font-extrabold dark:text-white text-black mb-10">{favs?.explanation} </p>
				</div>
			</div>
		</>
	)
}

export default FavoritePage;
