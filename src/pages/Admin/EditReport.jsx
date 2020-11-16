import React, { Component } from "react";
import MainTitle from "../../components/MainTitle";
import Label from "../../components/Label";
import Input from "../../components/Inputs";
import TechnicalServiceService from "../../services/techicalSService";


export default class EditReport extends Component {
	constructor(props) {
		super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
        this.state = {
            id: this.props.match.params.id != null ? this.props.match.params.id : -1,
            report: [],    
            date: "",
            loading: false,
			      error: ""
        }    
  }

  componentDidMount= ()=>{
    var current = new Date();
    this.setState({date: current.getUTCDate().toString()});//no me trae un carajo la hora
    
    TechnicalServiceService.getById(this.state.id).then(res=>{
        this.setState({report: res.data});
    });
    console.log(this.state)
  }

  render() {
    return (
      <section className="xs:mx-auto sm:mx-auto md:mx-10 lg:mx-40 mx-64">
        <form className="grid grid-cols-4 col-span-3 pt-10 xs:mx-5 sm:mx-5 md:mx-20 mx-40" onSubmit={this.handleSubmit}>
          <MainTitle class="col-span-4 mb-5" text={`Reporte de ${this.state.report.productRepairDescription}`} />
          <Label class="col-span-2" name="code" text={`Codigo: ${this.state.report.serialNumber}`} />
          <Label class="col-span-2" name="date" text={`Ingreso: ${this.state.report.dateReceived}`} />
          
          <Label class="pt-5 col-span-4" name="failure" text="Motivo de la reparación" />
          <textarea
            value={this.state.report.equipmentFailure}
            name="equipamentFailure"
            rows="2"
            cols="50"
            onChange={this.handleChange}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
          ></textarea>
          <Label class="pt-5 col-span-4" name="observations" text="Observaciones" />
          <textarea
            value={this.state.report.observations}
            name="observations"
            rows="2"
            cols="50"
            onChange={this.handleChange}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
          ></textarea>
          <Label class="col-span-4 pt-5" name="diagnostico" text="Diagnostico" />
          <textarea
            value={this.state.report.diagnostic}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
            name="diagnostic"
            rows="3"
            cols="50"
            onChange={this.handleChange}
          ></textarea>

          <Label class="col-span-2" name="name" text="Gastos en repuestos" />
          <Label class="col-span-2" name="name" text="Mano de Obra" />
          <Input
            class="pl-5 col-span-2 mr-8 mt-2"
            value={this.state.report.totalInputs}
            name="totalInputs"
            type="number"
            onChange={this.handleChange}
          />
          <Input
            value={this.state.report.totalLabor}
            class="pl-5 col-span-2 mt-2"
            name="totalLabor"
            type="text"
            onChange={this.handleChange}
          /> 

          <Label class="col-span-2 pt-5" name="price" text="Coste" />
          <Label class="col-span-2 pt-5 mx-5" name="delivery" text="Estado del Dispositivo" />
          <Input
            class="col-span-2 mt-2"
            name="total"
            type="number"
            value={this.state.report.total}
            onChange={this.handleChange}
          />
          <select name="serviceStatus"
            value={this.state.report.serviceStatus} 
            onChange={this.handleChange}
            className="col-span-2 mx-5 px-5 mt-2 block appearance-none bg-blanco border border-negro hover:border-rojo rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="0">Recibido</option>
            <option value="1">En Reparación</option>
            <option value="2">Por Confirmar</option>
            <option value="3">Reparado</option>
            <option value="4">Retira sin Reparar</option>
          </select>
          <button
            type="submit"
            className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-green-600 rounded-lg col-span-4"
          >
            Actualizar Reporte
          </button>
        </form>
      </section>
    );
  }

  handleChange = (event) => {
    if (event.target.name === "serviceStatus")
    {
      this.setState({...[event.target.name], event.target.value});
      return;
    }

    const value = event.target.type === "number" ? Number(event.target.value) : event.target.value;
    this.setState({
      report: {...[event.target.name], value}
    });
    console.log(this.state);

  };

  handleSubmit(e) {
    e.preventDefault();
    const data = {
        id: this.state.report.id,
        observations: this.state.report.observations,
        equipamentFailure: this.state.report.equipamentFailure,
        serviceStatus: this.state.report.serviceStatus,
        dateStatus: this.state.date,
        totalInputs: this.state.report.totalInputs,
        totalLabor: this.state.report.totalLabor,
        total: this.state.report.total,
        diagnostic: this.state.report.diagnostic
    }

    TechnicalServiceService.update(data.id, data).then(res=>{
        const { from } = this.props.location.state || {
            from: { pathname: "/admin/reports" },
        };
        this.props.history.push(from);
    }).catch = (e)=> {
        console.log(`No se pudo actualizar, aquí unas pistas ${e}`);
    };
  }

}
