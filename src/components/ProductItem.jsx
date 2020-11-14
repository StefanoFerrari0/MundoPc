import React, { Component } from "react";
import Label from "../components/Label";

export default class ProductItem extends Component {
	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state = {
			selectedOption: this.props.quantity
		};
	}

	handleChange(e) {
		this.setState({ selectedOption: e.target.value });
		console.log(this.state);
	}

	render() {
		const select = Array.from({ length: this.props.stock }, (v, i) => i + 1);
		return (
			<div className="grid grid-cols-6 col-span-6 pt-10 mt-5 font-robotoC">
				<Label class="col-start-2 col-span-1" name="product" text="Producto" />
				<Label class="col-start-3 col-span-1" name="price" text="Precio" />
				<Label class="col-start-4 col-span-1" name="quantity" text="Cantidad" />
				<Label class="text-center col-start-5 col-span-1" name="total" text="Total" />
				<img className="mt-3 col-start-1 col-span-1" alt={this.props.name} src={this.props.image} />
				<h3 className="mt-3 col-start-2 font-bold col-span-1">{this.props.name}</h3>
				<h3 className="mt-3 col-start-3 col-span-1">${this.props.price}</h3>
				<select
					value={this.state.selectedOption}
					onChange={this.handleChange}
					className="mt-3 col-start-4 col-span-1 block 
					appearance-none h-16 bg-blanco border border-negro
					hover:border-rojo px-2 py-2 rounded shadow leading-tight 
					focus:outline-none focus:shadow-outline">
					{select.map((item, index) => (
						<option key={index} value={item}>
							{item}
						</option>
					))}
				</select>
				<h3 className="mt-3 text-center col-start-5 col-span-1">
					{this.props.price * this.state.selectedOption}
				</h3>
				<button
					className="mt-3 h-16 col-start-6 col-span-1 bg-transparent
      hover:bg-rojo text-rojo font-semibold hover:text-blanco py-2 px-4 border
	  border-rojo hover:border-transparent rounded"
					onClick={this.props.delete}>
					✖
				</button>
				<hr className="col-span-6 mt-5" />
			</div>
		);
	}
}
