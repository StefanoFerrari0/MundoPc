import React, { Component } from "react";
import Image from "../images/Consulta.jpg";
import MainTitle from "../components/MainTitle";
import TableRow from "../components/TableRow";
import TechnicalServiceService from "../services/techicalSService";

export default class ConsultaST extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: this.props.match.params.code,
      query: [],
    };
  }

  componentDidMount() {
    console.log(this.state.search);
    TechnicalServiceService.getByCode(this.state.search).then(res=>{
      if (res.data){
        this.setState({query: res.data});
      }
    });
  }
  serviceStatusValue(value){
    switch(value) {
      case 0:
        return "Se recibió el dispositivo";
      case 1:
        return "El dispositivo esta en reparación";
      case 2:
        return "Falta confirmar por los técnicos";
      case 3:
        return "El dispositivo esta reparado";
      case 4:
        return "El cliente retira sin reparar";
    }
  }

  render() {
    return (
      <section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 xs:mx-auto xs:text-center mr-20">
        <div
          className="bg-cover bg-left-top w-full h-full"
          style={{ backgroundImage: "url(" + Image + ")" }}
        ></div>
        <div className="bg-white shadow overflow-hidden pt-20 pl-10 sm:rounded-lg">
          <div>
            <dl>
              <MainTitle class="xs:text-center" text="Consulta." />
              <TableRow text1="Código:" text2={this.state.query.serialNumber} />
              <TableRow text1="Dispositivo:" text2={this.state.query.productRepairDescription} />
              <TableRow
                text1="Motivo reparación:"
                text2={this.state.query.equipmentFailure}
              />
              <TableRow text1="Estado actual del dispositivo:" 
                text2={this.serviceStatusValue(this.state.query.serviceStatus)}
              />
              <TableRow text1="Coste de la reparación:" text2={this.state.query.total} />
              <TableRow
                text1="¿Listo para retirar?:"
                class1="text-rojo font-bold"
                text2={(this.state.query.serviceStatus===4 || this.state.query.serviceStatus===3)?"Si.":"No."}
                class2="uppercase"
              />
            </dl>
          </div>
        </div>
      </section>
    );
  }
}
