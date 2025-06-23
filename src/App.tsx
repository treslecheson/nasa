import { Outlet } from "react-router";
import Navbar from "./components/Navbar"








const App = () => {
	return (
		<>
			<Navbar />
			<main>
				<Outlet />
			</main>
		</>

	)
}






export default App;
