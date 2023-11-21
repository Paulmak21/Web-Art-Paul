import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 m-3 h1">Art Work App</span>
			</Link>
			<div className="ml-auto">
				<Link to="/favorites">
					<button className="btn btn-info m-2"><i className="fa fa-heart m-1"></i> Favorites</button>
				</Link>
			</div>
		</nav>
	);
};
