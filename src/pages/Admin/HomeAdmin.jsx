import React, { Component } from "react";
import { FcElectronics, FcOnlineSupport } from "react-icons/fc";
import Card from "../../components/CardAdmin";
export default class HomeAdmin extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<section>
				<div className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-2 mx-auto gap-2 my-16 w-3/5 sm:w-full">
					<Card icon={<FcElectronics size={100} className="mx-auto" />} link="products" name="Productos" />
					<Card icon={<FcOnlineSupport size={100} className="mx-auto" />} link="reports" name="Reportes" />
				</div>
			</section>
		);
	}
}
