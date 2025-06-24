import { Datepicker } from "flowbite-react";
import { useLocalStorage } from "usehooks-ts"



const FavoritesPage = () => {

	const [theme] = useLocalStorage('theme', 'dark')
	return (
		<>
			<div data-theme={theme} className="bg-white flex-col    dark:bg-navbar py-2 font">
				<div className="p-56 bg-[url(../src/assets/space.jpg)] bg-contain bg-size[100vw] font">
					<h1 className="flex justify-center text-8xl font-extrabold text-white ">Favorites</h1>
				</div>
			</div>
		</>
	)
}

export default FavoritesPage;
