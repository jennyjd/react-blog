import React from 'react';
import './Header.css';

class Header extends React.Component{

	render(){
		return(
			<div className="nav-bar">
				<ul>
					<li><a>Home</a></li>
					<li><a>Login</a></li>
					<li><a>Registration</a></li>
				</ul>
			</div>
			);
	}
}

export default Header;