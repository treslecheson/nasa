import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritePage from "./components/FavoritePage.tsx";
import ApodPage from "./components/ApodPage.tsx";
import Landing from "./components/Landing.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Landing />} />
					<Route path="favorite" element={<FavoritePage />} />
					<Route path="apod" element={<ApodPage />} />
				</Route>

			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
