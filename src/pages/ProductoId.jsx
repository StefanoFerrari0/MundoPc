import React, { Component } from "react";
import ProductX from "../components/ProductX";
import Image from "../images/parlante.jpg";

export default class ProductoId extends Component {
	constructor(props) {
		super(props);

		this.state = {
			id: 0,
			producto: [],
		};
	}

	componentDidMount() {
		//aca se busca en la base de datos el id y se rellena
	}

	render() {
		return (
			<ProductX
				name="Logitech X50 Bluetooth"
				price={1700}
				info="Tipo de altavoz: 1.0
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
        Clasificación de carga: 5 V, 500 mA (carga USB)"
				stock={60}
				image={Image}
				id={this.props.match.params.id}
			/>
		);
	}
}
