import { useLocalStorage } from 'usehooks-ts'
import ThemeIcon from './ThemeIcon';

export default function Toggle() {
	const [theme, setTheme] = useLocalStorage('theme', 'dark')


	const changeTheme = () => {
		if (theme === "dark") {
			setTheme("light")
		} else {
			setTheme("dark")
		}
	}





	return (
		<div>

			<button type="button" onClick={changeTheme} className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900">
				<ThemeIcon /></button>
		</div>
	)
} 
