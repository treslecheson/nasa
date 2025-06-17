type ModeButtonProps = {
	currentMode: string;
}


const ModeButton: React.FC<ModeButtonProps> = ({ currentMode }) => {
	const ModeButtonButton = () => {
		if (currentMode === "light") {
			currentMode = "dark"
		} else {
			currentMode = "light"
		}
	}

	if (currentMode == "light") {
		return (

			<button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={ModeButtonButton} >🌒</button>
		)
	}
	else {
		return (
			<button className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900" onClick={ModeButtonButton}>test</button>
		)
	}
}

export default ModeButton;
