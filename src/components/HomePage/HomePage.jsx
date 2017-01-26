import React from 'react';
import { browserHistory } from 'react-router'

import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './HomePage.sass';

class HomePage extends React.Component{
	handleClick(e){
		browserHistory.push(`/app`)
	}

	render(){
		return(
			<div id="main">
				<div id="panel">
					<span id="welcome">Welcome to MyBlog</span>
					<button id="try-now" onClick={this.handleClick}>Try Now</button>

				</div>
			</div>
			);
	}
}

export default HomePage;
