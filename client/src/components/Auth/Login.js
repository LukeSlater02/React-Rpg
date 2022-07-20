import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../../modules/authManager";
import './Login.scss'

export function Login() {
	let navigate = useNavigate();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const [loginClicked, setLoginClicked] = useState(false)
	const [registerClicked, setRegisterClicked] = useState(false)

	const loginSubmit = (e) => {
		e.preventDefault();
		login(email, password)
			.then(() => navigate("/"))
			.catch(() => alert("Login Failed"));
	};

	const handleInputChange = event => {
		if (event.target.id == 'email') {
			setEmail(event.target.value)
		}
		if (event.target.id == 'password') {
			setPassword(event.target.value)
		}
	}

	return (
		<main className="container--login">
			{/* <dialog className="dialog dialog--auth" open={existDialog}>
				<div>User does not exist</div>
				<button
					className="button--close"
					onClick={(e) => setExistDialog(false)}
				>
					Close
				</button>
			</dialog> */}

			<div className="loginContentContainer">

				<div className="loginTitle">
					<img src="img/eyeCard.png"></img> <h1>T N E W G</h1> <img src="img/lichCard.png"></img>
				</div>

				<section className="loginBody">
					<div>
						<h1 onClick={() => {
							setLoginClicked(!loginClicked)
							setRegisterClicked(false)
						}}>LOG IN</h1>
					</div>
					{loginClicked ? <>
						<div>
							<input placeholder="Email"></input>
							<br></br>
							<input placeholder="password"></input>
						</div></> : ""}
					<div><h1 onClick={() => {
						setRegisterClicked(!registerClicked)
						setLoginClicked(false)
					}}>Register</h1>
					</div>
					{registerClicked ? <>
						<div>
							<input></input>
							<br></br>
							<input></input>
						</div></> : ""}
				</section>

			</div>

		</main>
	);
}