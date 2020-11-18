import React, { Component } from "react";
import MainTitle from "../components/MainTitle";
import ProductItem from "../components/ProductItem";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export default class Carrito extends Component {
	constructor(props) {
		super(props);
		this.DeleteItem = this.DeleteItem.bind(this);
		this.printPdf = this.printPdf.bind(this);

		this.state = {
			products: [],
		};
	}

	componentDidMount() {
		var storage = JSON.parse(localStorage.getItem("Products")) || [];
		this.setState({ products: storage });
	}

	DeleteItem(idProduct) {
		//al pasarle aca el index queda viejo y no se actualiza. hay que ver la forma de actualizarlo
		var product = [];
		product = JSON.parse(localStorage.getItem("Products")) || [];
		var newArray = product.filter(function (product) {
			return product.id !== idProduct;
		});

		localStorage.setItem("Products", JSON.stringify(newArray));
		this.setState({ products: newArray });
	}

	printPdf(){
		html2canvas(document.getElementById("carritopdf")).then(canvas => {
			let imgData = canvas.toDataURL('image/png');
			let pdf = new jsPDF("portrait", "mm", "a4");
			pdf.scaleFactor = 2;


			pdf.addImage(imgData, 'PNG', 0, 0);
			pdf.save("download.pdf"); 
		});
		
	}
	

	render() {
		var storage = JSON.parse(localStorage.getItem("Products")) || [];
		let total = Object.values(storage).reduce((t, { total }) => t + total, 0);
		
		return (
			<section className="grid grid-cols-9 grid-rows-1 grid-flow-col ml-20 xs:mx-10 sm:mx-10">
				<div id="carritopdf" className="grid grid-cols-6 col-span-6 pt-10 mt-10 font-robotoC xs:col-span-9 sm:col-span-9">
					<MainTitle
						class="col-span-5 mb-5 xs:text-center xs:col-span-9 sm:text-center"
						text="Carrito presupuestario."
					/>			
					{this.state.products.map((item, index) => (
						<ProductItem
							key={item.id}
							id={item.id}
							image={item.image}
							name={item.name}
							price={item.price}
							stock={item.stock}
							delete={() => this.DeleteItem(item.id)}
							quantity={item.quantity}
						/>
					))}
					
				</div>
				<div className="row-start-1 col-span-3 my-auto pt-40 mx-auto text-center xs:pt-5 xs:row-start-2 xs:col-span-9 sm:row-start-2 sm:pt-5 sm:col-span-9">
					<h1 className="text-4xl font-bold">${total}</h1>
					<button
						type="button"
						name="printPdf"
						onClick={this.printPdf}
						className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 
            py-2 px-8 border border-rojo rounded-lg col-span-3">
						Descargar PDF
					</button>
				</div>
			</section>
		);
	}
}
