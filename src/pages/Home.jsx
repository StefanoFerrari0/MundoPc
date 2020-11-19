import React, { Component } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import ImageBanner from "../images/bannerHome.jpg";
import CardProduct from "../components/CardProduct";
import Label from "../components/Label";
import Input from "../components/Inputs";
import { Link } from "react-router-dom";
import MessengerService from "../services/messengerService";
import ProductService from '../services/prodService';
import Message from '../components/Message';


export default class Home extends Component {
	constructor() {
		super();

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.resetForm = this.resetForm.bind(this);
		this.state = {
			products:[],
			name: "",
			telephone: "",
			email: "",
			message: "",
			isSendMessage: false,
		};
	}

	render() {
		let i=0;
		const { name } = this.state;
		const _p = this.state.products;
		const {isSendMessage}= this.state;
		var alert = null;
    	if (isSendMessage){ alert=(<Message message="Su consulta ya fué almacenada."/>);
		}else{ alert=null;}
		return (
			<>
				<Header
					image={ImageBanner}
					title="¿Te enteraste de nuestras últimas ofertas?"
					subtitle="¡Pasá a verlas y añadilas a tu carrito presupuestario!"
					button="Ofertas"
				/>
				<MainTitle class="text-center mt-10" text="Productos." />
				<Subtitle class="text-center" text="Armá tu presupuesto" />

				<div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 mx-auto gap-3 mt-5 w-4/5">
					{	
						_p.slice(1,5).map((p) => (
            				<CardProduct key={p.id} id={p.id} name={p.name} price={p.price} image={p.image}/>
								
						))
					}
					<Link
						to="/productos"
						className="col-span-4 xs:col-span-2 sm:col-span-2 mx-auto mt-5 py-2 px-10 bg-rojo hover:bg-red-500 text-blanco font-bold text-center border border-rojo rounded-lg">
						Ver más productos
					</Link>
				</div>

				<section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 mr-20 xs:mx-auto sm:mx-0">
				{alert}
					<div className="grid xs:grid-cols-2 sm:grid-cols-2 grid-cols-4 col-span-1 pt-20 pl-16 xs:px-5 sm:px-0 sm:mx-2">
						<MainTitle class="col-span-4" text="Contactanos." />
						<Subtitle
							class="col-span-3"
							text="Rellena los campos con tus datos y te responderemos lo antes posible."
						/>
						<form
							className="grid grid-cols-4 xs:col-span-2 sm:col-span-2 col-span-3 pt-10"
							onSubmit={this.handleSubmit}>
							<Label class="col-span-2" name="name" text="Nombre" />
							<Label class="col-span-2" name="telephone" text="Teléfono (opcional)" />
							<Input
								name="name"
								type="text"
								value={name}
								onChange={this.handleChange}
								class="col-span-2 pl-5 mr-8 sm:pl-2 sm:mr-2"
							/>
							<Input
								name="telephone"
								type="text"
								value={this.state.telephone}
								onChange={this.handleChange}
								class="col-span-2 pl-5"
							/>
							<Label class="pt-5 col-span-4" name="email" text="Correo electrónico" />
							<Input
								name="email"
								type="email"
								value={this.state.email}
								onChange={this.handleChange}
								placeholder="ej: mundopc@email.com"
								class="pl-5 col-span-4"
							/>
							<Label class="pt-5 col-span-4" name="message" text="Mensaje" />
							<textarea
								name="message"
								rows="8"
								cols="50"
								value={this.state.message}
								onChange={this.handleChange}
								className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4"></textarea>
							<button
								type="submit"
								className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-rojo rounded-lg col-span-4">
								Enviar mensaje
							</button>
						</form>
					</div>

					<div className="xs:mx-2 sm:mx-2 pt-20 ml-20 mt-2 text-center col-span-1">
						<h1 className="xs:text-4xl md:text-4xl text-5xl font-bold text-rojo">O encontranos en:</h1>
						<h4 className="">Facebook</h4>
						<h4 className="">Instagram</h4>
						<h4 className="">4220187</h4>
						<h4 className="">mundopctuc@gmail.com</h4>
						<h4 className="">Maipú 121 (San Miguel de Tucumán, Argentina)</h4>
						<iframe
							title="GoogleMaps"
							className="w-full"
							src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7120.763232332201!2d-65.207775!3d-26.827812!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa97e5827039b47bd!2sMundo%20PC!5e0!3m2!1ses-419!2sus!4v1602617704757!5m2!1ses-419!2sus"
							width="600"
							height="450"
							frameBorder="0"
							allowFullScreen=""
							aria-hidden="false"
							tabIndex="0"></iframe>
					</div>
				</section>
			</>
		);
	}

	componentDidMount() {
		ProductService.getAll().then(res=>{
			this.setState({products: res.data});
		}).catch=(e)=>{
			console.log(`Ocurrió algo cargando productos, aquí algunas pistas: ${e}`)
		};
		//no se usa para naa
		const _u = JSON.parse(localStorage.getItem("user"));
	}

	handleChange = (e) => {
		const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
	};

	resetForm() {
		this.setState({
			name: "",
			telephone: "",
			email: "",
			message: ""
		});
	}

	handleSubmit(e) {
		e.preventDefault();
		//aqui validaciones

		const user = {
			name: this.state.name,
			phone: this.state.telephone,
			email: this.state.email,
			query: this.state.message,
		};
		MessengerService.create(user).then(res=>{
			this.setState({isSendMessage: true});

			const _message="Gracias por su consulta! le contestaremos lo antes posible";//espere sentado	
			MessengerService.sendFeedback({
				to_name: this.state.name,
				message: _message, 
				from_name: this.state.name, 
				to_email: this.state.email
			})
			this.resetForm();
		});
	}

	
}
