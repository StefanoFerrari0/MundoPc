import React, { Component }from 'react'
import MainTitle from '../../components/MainTitle'
import Input from '../../components/Inputs'
import { Link } from 'react-router-dom'
import ProductItemAdmin from '../../components/ProductItemAdmin'
import Image1 from '../../images/parlante.jpg'
import Image2 from '../../images/discossd.jpg'

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
            <MainTitle class="mt-10 mx-5" text="Productos."/>
            <Input name="search" type="number" placeholder="Buscar por código" value={this.state.search} onChange={this.handleChange} class="pl-5 mx-5"/>
            <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-10 mb-5 mr-10 border border-rojo rounded-lg">Buscar</button>
            <Link to="/admin/newproduct" className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 mx-5 border border-green-600 rounded-lg" >Crear producto</Link>
            <ProductItemAdmin image={Image1} code="420" name="Logitech X50 Bluetooth" price="1700" stock="5"/>
            <ProductItemAdmin image={Image2} name="Disco SSD Kingston 480GB A400 SATA3 2.5" price="7000" stock="5"/>
          </div>
        )
    }
}