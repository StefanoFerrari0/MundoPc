import React, { Component } from "react";
import Subtitle from "../components/Subtitle";
import Label from "../components/Label";
import Message from "../components/Message"

export default class ProductX extends Component {
	constructor(props) {
		super(props);

		this.AddCart = this.AddCart.bind(this);
		this.handleChange = this.handleChange.bind(this);

		this.state = {
			quantity: 1,
			total: 1,
			isAdd: false,
		};
	}

	componentDidMount() {
		this.setState({ total: this.state.price * this.state.selectedOption });
		//console.log(this.state)
	}

	AddCart(ProductId) {
		var data = {
			id: this.props.id,
			name: this.props.name,
			price: this.props.price,
			image: this.props.image,
			stock: this.props.stock,
			quantity: this.state.quantity,
			total: this.state.total
		};
		console.log(data);
		var array = [];
		// Parse the serialized data back into an aray of objects
		array = JSON.parse(localStorage.getItem("Products")) || [];
		// Push the new data (whether it be an object or anything else) onto the array

		var _isProduct = false;
		array.forEach((item) => {
			if (item.id === ProductId) {
				item.quantity += this.state.quantity;
				item.total = item.price * item.quantity;
				_isProduct = true;
				return;
			}
		});
		if (_isProduct === false) {
			array.push(data);
		}
		// Re-serialize the array back into a string and store it in localStorage
		localStorage.setItem("Products", JSON.stringify(array));
		this.setState({ isAdd: true });
	}

	handleChange(e) {
		const value = parseInt(e.target.value);
		this.setState({
			quantity: value,
			total: this.props.price * value			
		}, () => console.log(this.state));
	}

	render() {
		var alert = null;
		const select = Array.from({ length: this.props.stock }, (v, i) => i + 1);
		if (this.state.isAdd === true) {
			alert = (
				<Message message="El producto se agregó satisfactoriamente al carrito."/>				
			);
		} else {
			alert = null;
		}

		return (
			<>
				{alert}
				<section className="grid grid-cols-2 grid-flow-col mr-20">
					<div
						className="bg-cover bg-left-top w-full h-full"
						style={{ backgroundImage: "url(" + this.props.image + ")" }}></div>
					<div className="col-span-1 grid grid-cols-3 justify-self-auto mt-10">
						<h1 className="col-span-2 text-5xl font-bold">{this.props.name}</h1>
						<Subtitle text={"$" + this.props.price} class="col-start-1 col-span-1 italic text-5xl" />
						<Label
							class="justify-self-end col-start-2 col-span-1 flex justify-center items-center"
							name="quantity"
							text="Cantidad"
						/>
						<select
							value={this.state.selectedOption}
							name="quantity"
							onChange={this.handleChange}
							className="col-start-3 ml-6 px-8 w-20 col-span-1 block appearance-none bg-blanco border border-negro hover:border-rojo px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
							{select.map((item, index) => (
								<option key={index} value={item}>
									{item}
								</option>
							))}
						</select>
						<h3 className="col-span-3 text-3xl font-light my-5">Especificaciones:</h3>
						<p className="col-span-3 text-base text-gray-800 font-medium">{this.props.info}</p>

						<button
							type="submit"
							onClick={() => this.AddCart(this.props.id)}
							className="col-span-3 bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-4 mb-5 border border-rojo rounded-lg">
							Agregar al carrito
						</button>
					</div>
				</section>
			</>
		);
	}
}
