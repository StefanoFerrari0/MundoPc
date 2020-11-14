import React, { Component } from "react";
import ProductX from "../components/ProductX";
import ProductoServicio from "../services/prodService";

export default class ProductoId extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id != null ? this.props.match.params.id : 0,
			product: [],
			stock: 0
		};
	}

	componentDidMount() {
		//aca se busca en la base de datos el id y se rellena
		if (this.state.Id !== 0){
			let _id = Number.parseInt(this.state.id);
			ProductoServicio.getById(_id).then(res =>{
				this.setState({
					product: res.data,
					stock: res.data.stock
				});
			}).catch((e) => {
				console.log("catch error: " + e);
			});
		}	
		
		var a = parseInt(this.state.stock);
		console.log(a);
	}

	render() {
		return (
			<ProductX
				name={this.state.product.name}
				price={this.state.product.price}
				info={this.state.product.description}
				stock={Array.from({ length: this.props.stock }, (v, i) => i + 1)}
				image={this.state.product.image}
				id={this.state.product.id}
			/>
		);
	}
}
