import React, { Component } from "react";
import Subtitle from "../components/Subtitle";
import Label from "../components/Label";

export default class ProductX extends Component {
	constructor(props) {
		super(props);

		this.AddCart = this.AddCart.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			id: this.props.id,
			name: this.props.name,
			stock: Array.from({ length: this.props.stock }, (v, i) => i + 1),
			price: this.props.price,
			image: this.props.image,
			selectedOption: Number.parseInt(this.props.stock),
		};
	}

	AddCart() {
		console.log(this.state.selectedOption);
		var data = this.state;
		var a = [];
		// Parse the serialized data back into an aray of objects
		a = JSON.parse(localStorage.getItem("Products")) || [];
		// Push the new data (whether it be an object or anything else) onto the array
		a.push(data);
		// Re-serialize the array back into a string and store it in localStorage
		localStorage.setItem("Products", JSON.stringify(a));
		console.log(a);
	}

	handleChange(e) {
		this.setState({ selectedOption: e.target.value });
	}

	render() {
		//console.log(this.state);
		return (
			<section className="grid grid-cols-2 grid-flow-col mr-20">
				<div
					className="bg-cover bg-left-top w-full h-full"
					style={{ backgroundImage: "url(" + this.props.image + ")" }}></div>
				<div className="col-span-1 grid grid-cols-3 justify-self-auto mt-10">
					<h1 className="col-span-2 text-5xl font-bold">{this.state.name}</h1>
					<Subtitle text={"$" + this.props.price} class="col-start-1 col-span-1 italic text-5xl" />
					<Label
						class="justify-self-end col-start-2 col-span-1 flex justify-center items-center"
						name="quantity"
						text="Cantidad"
					/>
					<select
						value={this.state.selectedOption}
						onChange={this.handleChange}
						className="col-start-3 ml-6 px-8 w-20 col-span-1 block appearance-none bg-blanco border border-negro hover:border-rojo px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						{this.state.stock.map((item, index) => (
							<option key={index} value={item}>
								{item}
							</option>
						))}
					</select>
					<h3 className="col-span-3 text-3xl font-light my-5">Especificaciones:</h3>
					<p className="col-span-3 text-base text-gray-800 font-medium">{this.props.info}</p>
					<button
						type="submit"
						onClick={this.AddCart}
						className="col-span-3 bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-4 mb-5 border border-rojo rounded-lg">
						Agregar al carrito
					</button>
				</div>
			</section>
		);
	}
}
