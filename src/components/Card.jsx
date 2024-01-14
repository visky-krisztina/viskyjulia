import "../css/card.css";
const Card = (props) => {
	const { cardTitle, cardText, imgCard } = props;
	return (
		<div className='card-container'>
			<img className='img-card' src={imgCard} />
			<div className='card-text-container'>
				<h1>
					<strong>{cardTitle}</strong>
				</h1>
				<p className='bigger-p'>{cardText}</p>
			</div>
		</div>
	);
};

export default Card;
