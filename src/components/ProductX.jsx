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
			stock: this.props.stock,//Array.from({ length: this.props.stock }, (v, i) => i + 1),
			price: this.props.price,
			image: this.props.image,
			selectedOption: 1,
			total: 1,
			isAdd: false,
		};
	}

	componentDidMount() {
		this.setState({ total: this.state.price * this.state.selectedOption });
	}

	AddCart(ProductId) {
		var data = this.state;
		var array = [];
		// Parse the serialized data back into an aray of objects
		array = JSON.parse(localStorage.getItem("Products")) || [];
		// Push the new data (whether it be an object or anything else) onto the array

		var _isProduct = false;

		array.forEach((item) => {
			if (item.id === ProductId) {
				item.selectedOption += this.state.selectedOption;
				item.total = item.price * item.selectedOption;
				_isProduct = true;
				return;
			}
			_isProduct = true;
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
		this.setState({ selectedOption: value, total: this.state.price * value }, () => console.log(this.state));
	}

	render() {
		var alert = null;
		if (this.state.isAdd === true) {
			alert = (
				<div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
					<svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
						<path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" />
					</svg>
					<p>El producto se agregó satisfactoriamente al carrito.</p>
				</div>
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
							onClick={() => this.AddCart(this.state.id)}
							className="col-span-3 bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-4 mb-5 border border-rojo rounded-lg">
							Agregar al carrito
						</button>
					</div>
				</section>
			</>
		);
	}
}
