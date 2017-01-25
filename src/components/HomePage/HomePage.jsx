import React from 'react';
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import './HomePage.sass';

class HomePage extends React.Component{

	render(){
		return(
			<div id="main">
				<div id="panel">
					<span id="welcome">Welcome to MyBlog</span>
					<button id="try-now">Try Now</button>
				</div>
			</div>
			);
	}
}

export default HomePage;
