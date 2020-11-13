import React, { Component } from "react";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import Label from "../components/Label";
import Input from "../components/Inputs";
import Image from "../images/ServicioTecnico.jpg";
import TechnicalServiceService from "../services/techicalSService";

export default class ServicioTecnico extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.searchCode = this.searchCode.bind(this);
		this.state = {
			tservise: [],
			code: "",
			error: null,
		};
	}

	render() {
		const {error}= this.state;
		return (
			<section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 ml-20">
				<div className="grid grid-cols-4 pt-20">
					<MainTitle class="col-span-4" text="Servicio técnico." />
					<Subtitle
						class="col-span-3"
						text="Rellena el campo con el código que aparece en tu factura para consultar el estado de tu dispositivo."
					/>
					<form className="grid grid-cols-3 col-span-3 pt-10" onSubmit={this.handleSubmit}>
						<Label class="col-span-3" name="code" text="Código" />
						<Input
							onChange={this.handleChange}
							type="text"
							name="code"
							placeholder="ej: 420666"
							class="pl-5 col-span-3"
						/>
						
						<Label class="col-span-3" name="error" text={error} />

						<button
							type="submit"
							className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 border border-rojo rounded-lg mb-32 col-span-3">
							Consultar
						</button>
					</form>
				</div>
				<div
					className="bg-cover bg-center w-full h-full"
					style={{ backgroundImage: "url(" + Image + ")" }}></div>
			</section>
		);
	}

	handleChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
		console.log(this.state);
	};

	resetForm() {
		this.setState({
			code: "",
			error: null,
		});
	}

	searchCode(){		 
		TechnicalServiceService.getByCode(this.state.code).then(res=>{
			let _c = res.data;
			if (_c !== null){
				alert(_c.productRepairDescription)
				//console.log(res.data);
			}else{
				this.setState({error: res.statusText})
			}
		});
	}

	handleSubmit(e) {
		//e.preventDefault();
		
		this.searchCode();
		//Acá va lo que conecta al back
	}
}
