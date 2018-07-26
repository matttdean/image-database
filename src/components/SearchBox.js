import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', width: '100%', backgroundColor: 'rgb(179,196,205)' }}>
			<input 
			className ='pa3 ba b--lightest-blue bg-washed-blue br2'
			type='search' 
			placeholder='Search Images' 
			onChange={searchChange}
			/>
		</div>
	);
}


export default SearchBox;