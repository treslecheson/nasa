import { LuSun } from 'react-icons/lu'
import { LuMoon } from "react-icons/lu";
import { useLocalStorage } from 'usehooks-ts';



const ThemeIcon = () => {
	const [theme] = useLocalStorage('theme', 'dark')


	if (theme === "dark") {
		return (
			<LuSun />
		)
	} else {
		return (
			<LuMoon />
		)
	}
}


export default ThemeIcon;
