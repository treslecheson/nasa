import { Tooltip } from 'flowbite-react';
import { LuSun } from 'react-icons/lu'
import { LuMoon } from "react-icons/lu";
import { useLocalStorage } from 'usehooks-ts';



const ThemeIcon = () => {
	const [theme] = useLocalStorage('theme', 'dark')


	if (theme === "dark") {
		return (
			<Tooltip content="light mode" className='bg-white text-black dark:bg-white'>
				<LuSun />
			</Tooltip>
		)
	} else {
		return (
			<Tooltip content="dark mode" className='bg-white text-black' >
				<LuMoon />
			</Tooltip>
		)
	}
}


export default ThemeIcon;
