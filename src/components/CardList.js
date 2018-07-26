import React from 'react';
import Card from './Card';

const CardList = ({ images }) => {
	return (
		<div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap'}}>
			{
				images.map((user, i) => {
					return (
						<Card 
							key={i} 
							img={images[i].img} 
							name={images[i].name} 
							tags={images[i].tags}
						/>
					);
				})
			}
		</div>
	);
}

export default CardList;