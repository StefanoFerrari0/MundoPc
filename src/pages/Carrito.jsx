import React, { Component }from 'react'
import MainTitle from '../components/MainTitle'
import ProductItem from '../components/ProductItem'
import Image1 from '../images/parlante.jpg'
import Image2 from '../images/discossd.jpg'

export default class Carrito extends Component{
    constructor(props){
        super(props)
        this.state = {
            productosId: []
        };
    }

    componentDidMount(){
        /*Aca al iniciarse el componente se agarran los ids de los productos del carrito y
        se los carga al productosId:
        
        this.setState{
            productosId: []
        };
        */ 
    }


    render(){
        return (
        <section className="grid grid-cols-9 grid-rows-1 grid-flow-col ml-20 xs:mx-10 sm:mx-10">
            <div className="grid grid-cols-6 col-span-6 pt-10 mt-10 font-robotoC xs:col-span-9 sm:col-span-9">
                <MainTitle class="col-span-5 mb-5 xs:text-center xs:col-span-9 sm:text-center" text="Carrito presupuestario."/>
                <ProductItem image={Image1} name="Logitech X50 Bluetooth" price="1700" stock="5"/>
                <ProductItem image={Image2} name="Disco SSD Kingston 480GB A400 SATA3 2.5" price="7000" stock="5"/>
            </div>
            <div className="row-start-1 col-span-3 my-auto pt-40 mx-auto text-center xs:pt-5 xs:row-start-2 xs:col-span-9 sm:row-start-2 sm:pt-5 sm:col-span-9">
                <h1 className="text-4xl font-bold">Total</h1>
                <h2 className="text-4xl font-medium italic" >$10.400</h2>
                <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-8 border border-rojo rounded-lg col-span-3">Descargar PDF</button>
            </div>
        </section>
        )
    }
}