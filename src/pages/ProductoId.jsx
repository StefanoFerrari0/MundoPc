import React, { Component } from "react";
import ProductX from "../components/ProductX";
import ProductoServicio from "../services/prodService";

export default class ProductoId extends Component {
	constructor(props) {
		super(props);
		this.getProduct = this.getProduct.bind(this);

		this.state = {
			id: this.props.match.params.id != null ? this.props.match.params.id : 0,
			product: new Object()
		};
	}

	getProduct(){
		if (this.state.Id !== 0){
			ProductoServicio.getById(this.state.id).then(res =>{
				const _p = res.data;				
				this.setState({
					product: _p
				});
			}).catch((e) => {
				console.log("catch error: " + e);
			});
		}	
	}

	componentDidMount() {
		//aca se busca en la base de datos el id y se rellena
		this.getProduct();
	}

	render() {
		return (
			<ProductX
				name={this.state.product.name}
				price={this.state.product.price}
				info={this.state.product.description}
				stock={this.state.product.stock}
				image={this.state.product.image}
				id={this.state.id}
			/>
		);
	}
}
