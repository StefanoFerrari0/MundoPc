import React from 'react'
import MainTitle from '../components/MainTitle'
import ProductItem from '../components/ProductItem'
import Image1 from '../images/parlante.jpg'
import Image2 from '../images/discossd.jpg'

const Carrito = () => {
    return (
        <section className="grid grid-cols-9 grid-rows-2 grid-flow-col ml-20">
        <div className="grid grid-cols-6 col-span-6 pt-10 mt-10 font-robotoC">
        <MainTitle class="col-span-5 mb-5" text="Carrito presupuestario."/>
        <ProductItem image={Image1} name="Logitech X50 Bluetooth" price="1700" stock="5"/>
        <ProductItem image={Image2} name="Disco SSD Kingston 480GB A400 SATA3 2.5" price="$7000" stock="5"/>
        </div>
        <div className="row-start-1 col-span-3 my-auto pt-40 mx-auto text-center">
                <h1 className="text-4xl font-bold">Total</h1>
                <h2 className="text-4xl font-medium italic" >$10.400</h2>
                <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-8 border border-rojo rounded-lg col-span-3">Descargar PDF</button>
        </div>
    </section>
    )
}

export default Carrito;