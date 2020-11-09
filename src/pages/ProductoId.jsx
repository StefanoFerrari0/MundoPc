import React, { Component } from "react";
import ProductX from "../components/ProductX";
import Image from "../images/parlante.jpg";
import ProductoServicio from "../services/prodService";

export default class ProductoId extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: this.props.match.params.id != null ? this.props.match.params.id : 0,
			product: []
		};
	}

	componentDidMount() {
		//aca se busca en la base de datos el id y se rellena
		if (this.state.Id != 0){
			let _id = Number.parseInt(this.state.id);
			ProductoServicio.getById(_id).then(res =>{
				let _data = res.data;
				this.setState({
					product: _data,
				});
			}).catch((e) => {
				console.log("catch error: " + e);
			});
		}
		console.log(this.state.id);
		console.log(this.state.product);
	}

	render() {
		return (
			<ProductX
				name={this.state.product.name}
				price={this.state.product.price}
				info={this.state.product.description}
				stock={this.state.product.stock}
				image={this.state.product.image}
				id={this.state.product.id}
			/>
		);
	}
}

/*


"Tipo de altavoz: 1.0
        Tipo de alimentación: Batería de litio recargable; carga por USB
        Protocolo inalámbrico: Bluetooth
        Accesorio requerido: Cable de carga USB
        Tipo de conexión: Inalámbrica Bluetooth, 3,5 mm
        Indicadores luminosos (LED): Azul, rojo y morado
        Detalles de la batería: 750 mAh; 3,7 V
        Duración de batería (recargable): 5 horas
        Potencia nominal real: 3 W
        Tamaño de transductor: 38,1 mm
        Nivel de presión de sonido (SPL máx.): >78 dBC
        Relación señal/ruido (SNR): <-85 dBr
        Respuesta de frecuencia: 132 Hz - 20 kHz
        Impedancia de entrada: 4 ohmios
        Controles de audio: Volumen+, Volumen Encendido/Apagado/Emparejamiento Bluetooth
        Clasificación de carga: 5 V, 500 mA (carga USB)"*/