import React from 'react';
import './css/Login.css';
import {Link} from 'react-router-dom';


const Login = () => {
	return (
		<div className="div_centrado">
			<div className="container">
				<Link to="/Home">
					<button type="submit" className="btn-login">CORONAVIRUS</button>
				</Link>
			</div>
		</div>
	)
}

export default Login;