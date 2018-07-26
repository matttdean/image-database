import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import './App.css';
import Scroll from '../components/Scroll';
import Header from '../components/Header';
import Upload from '../components/Upload';

class App extends Component {
	constructor(){
		super()
		this.state = {
			images: [],
			searchfield: ''
		}
	}
	componentDidMount(){
		fetch('https://matttdean.github.io/db.json')
			.then(response=> response.json())
			.then(users=> this.setState({images: users}));
	}
	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value})
	}
	render() {
		const filteredImages = this.state.images.filter(image =>{
			return image.tags.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return (
		<div className='tc'>
				<Header />
				<SearchBox searchChange={this.onSearchChange}/>
		
			<Scroll>
				<CardList images={filteredImages}/>
			</Scroll>
			<Upload />
		</div>
	);	
	}
}

export default App;