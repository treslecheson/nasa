import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import FavoritesPage from "./components/FavoritesPage.tsx";
import ApodPage from "./components/ApodPage.tsx";
import Landing from "./components/Landing.tsx";
import EarthPage from "./components/EarthPage.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />}>
					<Route index element={<Landing />} />
					<Route path="favorites" element={<FavoritesPage />} />
					<Route path="apod" element={<ApodPage />} />
					<Route path="earth" element={<EarthPage />} />
				</Route>

			</Routes>
		</BrowserRouter>
	</StrictMode>,
)
