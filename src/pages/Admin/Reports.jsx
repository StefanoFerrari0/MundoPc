import React, { Component } from "react";
import MainTitle from "../../components/MainTitle";
import Input from "../../components/Inputs";
import { Link } from "react-router-dom";
import ReportItemAdmin from "../../components/ReportItemAdmin";
import TechnicalServiceService from "../../services/techicalSService";

export default class Products extends Component {
	constructor(props) {
		super(props);
		this.state = {
			search: null,
			reports: [],
		};
	}

	componentDidMount() {
		TechnicalServiceService.getAll().then((report) => {
			this.setState({ reports: report.data });
		});
	}

	deleteReport(idReport) {
		if (window.confirm("Realmente desea borrar el Reporte?")) {
			TechnicalServiceService.delete(idReport).then((res) => {
				console.log(res.status);
			});
		}
	}

	render() {
		return (
			<div className="container mx-auto">
				<MainTitle class="mt-10 mx-5" text="Reportes." />
				<Input
					name="search"
					type="number"
					placeholder="Buscar por código"
					value={this.state.search}
					onChange={this.handleChange}
					class="pl-5 mx-5"
				/>
				<button
					type="submit"
					className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-10 mb-5 mr-10 border border-rojo rounded-lg">
					Buscar
				</button>
				<Link
					to="/MundoPc/admin/newreport"
					className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 mx-5 border border-green-600 rounded-lg">
					Crear reporte
				</Link>

				{this.state.reports.map((_r) => (
					<ReportItemAdmin
						key={_r.id}
						id={_r.id}
						code={_r.serialNumber}
						name={_r.productRepairDescription}
						date={_r.dateReceived}
						ready={_r.serviseStatus === 4 ? "SI" : "NO"}
						delete={() => this.deleteReport(_r.id)}
					/>
				))}
			</div>
		);
	}
}
