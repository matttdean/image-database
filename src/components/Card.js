import React from 'react';

const Card = ({name, img, tags, }) => {
	return(
		<div className='dim' style={{width: '200px', height: '200px', backgroundImage: 'url("' +  img + '")', backgroundSize: 'cover', backgroundPosition: 'center', margin: '5px' }}>
			{/* <img alt='gallery' src={img}  style={{ overflowX: 'hidden', height: 'auto', width: 'auto' }}/> */}
			
		</div>
	);
}

export default Card;