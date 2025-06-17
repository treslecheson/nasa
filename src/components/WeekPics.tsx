import { useEffect, useState } from "react"

const apiKey = import.meta.env.VITE_NASA_API_KEY
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


type ApodResponse = {
	url: string;
}



const WeekPicture: React.FC = () => {
	const [data, setData] = useState<ApodResponse>()

	useEffect(() => {
		const fetchApod = async () => {
			try {
				const response = await fetch(apiURL);
				if (!response.ok) {
					throw new Error(`response status: ${response.status}`);
				}
				const json: ApodResponse = await response.json()
				setData(json)
			} catch (error) {
				console.error(error)
			}
		}
		fetchApod();
	}, [data]);


	return (
		<>
			{
				data ? <img src={data.url} /> : <h2>test 1</h2>
			}
			{
				console.log(data?.url)
			}
		</>
	)
}

export default WeekPicture;
