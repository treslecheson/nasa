/*
	Installed from https://reactbits.dev/ts/default/
*/

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import "./Stack.css";

const apiKey = import.meta.env.VITE_NASA_API_KEY
const apiURL = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`

function getFormattedDate(date: Date): string {
	const year = date.getFullYear();
	const month = (date.getMonth() + 1).toString().padStart(2, '0');
	const day = date.getDate().toString().padStart(2, '0');

	return `${year}-${month}-${day}`;
}

const getWeekDates = (): string[] => {
	const currentDate: Date = new Date
	const oneDayAgo = new Date(currentDate);

	const twoDayAgo = new Date(currentDate);
	const threeDayAgo = new Date(currentDate);
	const fourDayAgo = new Date(currentDate);
	const fiveDayAgo = new Date(currentDate);
	const sixDayAgo = new Date(currentDate);

	oneDayAgo.setDate(currentDate.getDate() - 1)
	twoDayAgo.setDate(currentDate.getDate() - 2)
	threeDayAgo.setDate(currentDate.getDate() - 3)
	fourDayAgo.setDate(currentDate.getDate() - 4)
	fiveDayAgo.setDate(currentDate.getDate() - 5)
	sixDayAgo.setDate(currentDate.getDate() - 6)
	const dates: string[] = [getFormattedDate(currentDate), getFormattedDate(oneDayAgo), getFormattedDate(twoDayAgo), getFormattedDate(threeDayAgo), getFormattedDate(fourDayAgo), getFormattedDate(fiveDayAgo), getFormattedDate(sixDayAgo),]
	return dates
}



type ApodResponse = {
	url: string
}











interface CardRotateProps {
	children: React.ReactNode;
	onSendToBack: () => void;
	sensitivity: number;
}

function CardRotate({ children, onSendToBack, sensitivity }: CardRotateProps) {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const rotateX = useTransform(y, [-100, 100], [60, -60]);
	const rotateY = useTransform(x, [-100, 100], [-60, 60]);

	function handleDragEnd(_: never, info: { offset: { x: number; y: number } }) {
		if (
			Math.abs(info.offset.x) > sensitivity ||
			Math.abs(info.offset.y) > sensitivity
		) {
			onSendToBack();
		} else {
			x.set(0);
			y.set(0);
		}
	}

	return (
		<motion.div
			className="card-rotate"
			style={{ x, y, rotateX, rotateY }}
			drag
			dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
			dragElastic={0.6}
			whileTap={{ cursor: "grabbing" }}
			onDragEnd={handleDragEnd}
		>
			{children}
		</motion.div>
	);
}

interface StackProps {
	randomRotation?: boolean;
	sensitivity?: number;
	cardDimensions?: { width: number; height: number };
	sendToBackOnClick?: boolean;
	cardsData?: { id: number; img: string }[];
	animationConfig?: { stiffness: number; damping: number };
}



export default function Stack({
	randomRotation = false,
	sensitivity = 200,
	cardDimensions = { width: 208, height: 208 },
	cardsData = [],
	animationConfig = { stiffness: 260, damping: 20 },
	sendToBackOnClick = false,
}: StackProps) {



	useEffect(() => {

		const fetchImages = async (weekDates: string[]) => {

			const imageList = [];
			for (let i = 0; i < weekDates.length; i++) {
				try {
					const response = await fetch(`${apiURL}&date=${weekDates[i]}`)
					if (!response.ok) {
						throw new Error(`Response status: ${response.status}`)
					}
					const data: ApodResponse = await response.json()
					const image = { id: i + 1, img: data.url }
					imageList.push(image)
				} catch (error) {
					console.error(`Error fetching image ${i + 1}`, error)
				}
			}
			console.log(imageList)
			setCards(imageList)
			return imageList
		}
		fetchImages(getWeekDates())
	}, [])

	const [cards, setCards] = useState(
		cardsData.length
			? cardsData
			: []);

	const sendToBack = (id: number) => {
		setCards((prev) => {
			const newCards = [...prev];
			const index = newCards.findIndex((card) => card.id === id);
			const [card] = newCards.splice(index, 1);
			newCards.unshift(card);
			return newCards;
		});
	};

	return (
		<div
			className="stack-container"
			style={{
				width: cardDimensions.width,
				height: cardDimensions.height,
				perspective: 600,
			}}
		>
			{cards.map((card, index) => {
				const randomRotate = randomRotation ? Math.random() * 10 - 5 : 0;

				return (
					<CardRotate
						key={card.id}
						onSendToBack={() => sendToBack(card.id)}
						sensitivity={sensitivity}
					>
						<motion.div
							className="card"
							onClick={() => sendToBackOnClick && sendToBack(card.id)}
							animate={{
								rotateZ: (cards.length - index - 1) * 4 + randomRotate,
								scale: 1 + index * 0.06 - cards.length * 0.06,
								transformOrigin: "90% 90%",
							}}
							initial={false}
							transition={{
								type: "spring",
								stiffness: animationConfig.stiffness,
								damping: animationConfig.damping,
							}}
							style={{
								width: cardDimensions.width,
								height: cardDimensions.height,
							}}
						>
							<img
								src={card.img}
								alt={`card-${card.id}`}
								className="card-image"
							/>
						</motion.div>
					</CardRotate>
				);
			})}
		</div>
	);
}
