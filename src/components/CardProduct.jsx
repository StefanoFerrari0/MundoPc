import React from 'react'

function CardProduct(props) {
    return (
        <article className="col-span-1 xs:w-full sm:3/4 md:w-full w-3/4 grid grid-cols-2 rounded rounded-lg border border-rojo bg-negro overflow-hidden shadow-lg">
         <img className="col-span-2 w-full" src={props.image} alt={props.name}/>
            <div className="col-span-2 px-6 py-4">
                <div className="xs:text-sm sm:text-sm md:text-sm lg:text-sm font-bold text-base text-blanco text-center mb-2 h-16">{props.name}</div>
                <div className="xs:text-lg sm:text-lg md:text-lg text-xl font-bold text-blanco mt-4 text-center">${props.price}</div>
            </div>
        </article>
    );
  }

  export default CardProduct;