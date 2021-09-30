//import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'
import { BrowserRouter, Link } from 'react-router-dom'

function PiePagina(){
	return(
		<div className="container-pie">
		 	<h5><b>T h e J i s</b> &copy;
		 	<BrowserRouter> 
		 	<Link to="https://github.com/ing-thejis"><FaGithub /></Link>
		 	<Link to="https://twitter.com/ingGarc1a"><FaTwitter /></Link> 
		 	<Link to="https://www.linkedin.com/in/jesith-garc%C3%ADa-ing15/"><FaLinkedin /></Link>
		 	</BrowserRouter>
		 	</h5>
		</div>
	);
}

export default PiePagina;