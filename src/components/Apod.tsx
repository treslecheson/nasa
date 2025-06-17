import { useEffect, useState } from "react"
import { ClipLoader } from "react-spinners"

const apiKey = import.meta.env.VITE_NASA_API_KEY
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`


type ApodResponse = {
	url: string;
	explanation: string;
}


const getDate = (dayAgo: number): string => {
	const today = new Date();
	const month = String(today.getMonth() + 1).padStart(2, '0');
	const day = String(today.getDate()).padStart(2, '0');
	const year = today.getFullYear();
	const day1 = Number(day) - dayAgo
	console.log(`${year}-${month}-${day1}`)
	return `${year}-${month}-${day1}`
}



const Apod: React.FC = () => {
	const [data, setData] = useState<ApodResponse>()

	useEffect(() => {
		const fetchApod = async () => {
			try {
				const response = await fetch(`${apiURL}&date=${getDate(9)}`);

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
				data ? <><img src={data.url} />
					<p>{data.explanation}</p></> : <ClipLoader
					color="blue"
					loading={true}
					size={150}
					aria-label="Loading Spinner"
					data-testid="loader"
				/>
			}
			{
			}
		</>
	)
}

export default Apod;
