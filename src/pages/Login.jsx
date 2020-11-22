import React, { Component } from "react";

import { Link } from "react-router-dom";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import Label from "../components/Label";
import Input from "../components/Inputs";
import Image from "../images/Login.jpeg";
import { login, logout } from "../services/userService";
import Message from "../components/Message";

class Login extends Component {
	constructor(props) {
		super(props);

		logout();

		this.state = {
			email: "",
			password: "",
			submitted: false,
			loading: false,
			error: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();

		this.setState({ submitted: true });
		const { email, password } = this.state;

		// stop here if form is invalid
		if (!(email && password)) {
			return;
		}

		this.setState({ loading: true });
		login(email, password).then(
			(user) => {
				const _u = JSON.parse(localStorage.getItem("user"));

				if (_u.role === 0) {
					const { from } = this.props.location.state || { from: { pathname: "/admin/homeadmin" } };
					this.props.history.push(from);
					return;
				}

				if (_u.role === 1) {
					const { from } = this.props.location.state || { from: { pathname: "/" } };
					this.props.history.push(from);
					return;
				}
			},
			(error) => this.setState({ error, loading: false })
		);
	}
	render() {
		var alert = null;
		const { email, password, error, loading } = this.state;
		if (error) {
			alert = <Message message="El email o la contraseña no concuerdan." />;
		} else {
			alert = null;
		}

		return (
			<>
				<section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ml-20">
					{alert}
					<div className="grid grid-cols-4 pt-20">
						<MainTitle class="col-span-4" text="Login." />
						<Subtitle
							class="col-span-3"
							text="Inicia sesión rellenando tus datos en los siguientes campos."
						/>
						<form className="grid grid-cols-3 col-span-3 pt-10" onSubmit={this.handleSubmit}>
							<Label class="col-span-3" name="email" text="Correo electrónico" />
							<Input
								value={email}
								onChange={this.handleChange}
								name="email"
								type="email"
								placeholder="ej: mundopc@email.com"
								class="pl-5 col-span-3"
							/>
							<Label class="pt-5 col-span-3" name="password" text="Contraseña" />
							<Input
								value={password}
								onChange={this.handleChange}
								name="password"
								type="password"
								class="pl-5 col-span-3"
							/>
							<button
								type="submit"
								disabled={loading}
								className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 border border-rojo rounded-lg col-span-3">
								Iniciar sesión
							</button>
						</form>
						<h4 className="font-medium text-gray-700 text-center pt-8 col-span-3">
							¿No tenes una cuenta?{" "}
							<Link to="/MundoPc/registro" className="text-rojo hover:font-bold hover:text-red-600">
								Registrate
							</Link>
						</h4>
						<Link
							to="/MundoPc/recuperar-cuenta"
							className="font-medium pt-3 pb-5 text-rojo text-center hover:font-bold hover:text-red-600 col-span-3">
							¿Olvidaste tu contraseña?
						</Link>
					</div>
					<div
						className="bg-content bg-center w-full h-full min-h-full"
						style={{ backgroundImage: "url(" + Image + ")" }}></div>
				</section>
			</>
		);
	}

	handleChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	resetForm() {
		this.setState({
			email: "",
			password: "",
			error: null,
		});
	}
}

export default Login;
