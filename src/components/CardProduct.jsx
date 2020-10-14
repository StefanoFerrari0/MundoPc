import React from 'react'

function CardProduct(props) {
    return (
        <div class="max-w-sm rounded rounded-lg border border-rojo bg-negro overflow-hidden shadow-lg col-span-1 justify-items-auto">
         <img className="w-full" src={props.image} alt={props.name}/>
            <div className="px-6 py-4">
                <div className="font-bold text-base text-blanco text-center mb-2 h-16">{props.name}</div>
                <div className="font-bold text-blanco text-xl mt-4 text-center">${props.price}</div>
            </div>
        </div>
    );
  }

  export default CardProduct;