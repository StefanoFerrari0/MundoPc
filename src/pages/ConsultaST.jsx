import React, { Component } from 'react'
import Image from '../images/Consulta.jpg'
import MainTitle from '../components/MainTitle'
import TableRow from '../components/TableRow'

export default class ConsultaST extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        query: []
      };
    }
  
    componentDidMount() {
      var code = this.props.code;
  
      //aca se busca en la base de datos el codigo y se rellena el props consulta
    }
  
    render() {
      return  <section className="grid grid-cols-2 grid-flow-col mr-20">
      <div className="bg-cover bg-left-top w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
        <div className="bg-white shadow overflow-hidden pt-20 pl-10 sm:rounded-lg">
            <div>
                <dl>
                <MainTitle class="" text="Consulta."/>
                <TableRow text1="Código:" text2="420666"/>
                <TableRow text1="Dispositivo:" text2="Playstation 4 Slim"/>
                <TableRow text1="Motivo reparación:" text2="Dejó de prender de la nada, se prende una luz roja. Al prenderla dura 5 seg prendida y se apaga automaticamente."/>
                <TableRow text1="Estado actual del dispositivo:" text2="Reparado"/>
                <TableRow text1="Coste de la reparación:" text2="$3500"/>
                <TableRow text1="¿Listo para retirar?:" class1="text-rojo" text2="Si." class2="uppercase"/>
                </dl>
            </div>
        </div>
    </section>
    }
  }
