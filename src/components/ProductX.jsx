import React from 'react'
import Subtitle from '../components/Subtitle'
import Label from '../components/Label'

function ProductItem(props) {
    return (
        <section className="grid grid-cols-2 grid-flow-col mr-20">
      <div className="bg-cover bg-left-top w-full h-full" style={{ backgroundImage: "url("+props.image+")" }}></div>
        <div className="col-span-1 grid grid-cols-3 justify-self-auto mt-10">
            <h1 className="col-span-2 text-5xl font-bold">{props.name}</h1>
            <Subtitle text={"$"+props.price} class="col-start-1 col-span-1 italic text-5xl"/>
            <Label class="justify-self-end col-start-2 col-span-1 flex justify-center items-center" name="quantity" text="Cantidad"/>
            <select className="col-start-3 ml-6 px-8 w-20 col-span-1 block appearance-none bg-blanco border border-negro hover:border-rojo px-2 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option>1</option>        
                <option>2</option>
                <option>3</option>
            </select>
            <h3 className="col-span-3 text-3xl font-light my-5">Especificaciones:</h3>
            <p className="col-span-3 text-base text-gray-800 font-medium">{props.info}</p>
            <button type="submit" className="col-span-3 bg-rojo hover:bg-red-500 text-blanco font-bold mt-5 py-2 px-4 mb-5 border border-rojo rounded-lg">Agregar al carrito</button>
        </div>
    </section>
    );
  }

  export default ProductItem;