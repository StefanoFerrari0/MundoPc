import React, { Component }from 'react'
import MainTitle from '../../components/MainTitle'
import Input from '../../components/Inputs'
import { Link } from 'react-router-dom'
import ReportItemAdmin from '../../components/ReportItemAdmin'


export default class Products extends Component{
    constructor(props){
        super(props)
        this.state = {
         search: null,

        };
    }

    componentDidMount(){
       
    }


    render(){
        return (
          <div className="container mx-auto">
            <MainTitle class="mt-10 mx-5" text="Reportes."/>
            <Input name="search" type="number" placeholder="Buscar por código" value={this.state.search} onChange={this.handleChange} class="pl-5 mx-5"/>
            <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-10 mb-5 mr-10 border border-rojo rounded-lg">Buscar</button>
            <Link to="/admin/newreport" className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 mx-5 border border-green-600 rounded-lg" >Crear reporte</Link>
            <ReportItemAdmin code="420" name="Playstation 4 Slim" date="02/05/20" ready="SI"/>
            <ReportItemAdmin code="666" name="Notebook HP"  date="02/05/20" ready="NO"/>
            <ReportItemAdmin code="420" name="Playstation 4 Slim" date="02/05/20" ready="SI"/>
          </div>
        )
    }
}