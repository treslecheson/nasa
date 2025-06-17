type BackgroundProps = {
	image: string;
}


const Background: React.FC<BackgroundProps> = ({ image }) => {
	return (
		<div className="background">
			<img src={image} width='100%' />
		</div>
	)
}


export default Background;
