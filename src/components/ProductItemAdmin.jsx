import React from "react";
import Label from "./Label";
import { Link } from "react-router-dom";

export default function ProductItemAdmin(props) {
	return (
		<div className="grid sm:grid-cols-6 grid-cols-7 mx-auto pt-10 mt-5 font-robotoC sm:w-3/3 xl:w-4/5 xl:mx-5">
			<Label class="col-start-2 col-span-1" name="code" text="Código" />
			<Label class="col-start-3 col-span-1" name="name" text="Nombre" />
			<Label class="col-start-4 col-span-1" name="price" text="Precio" />
			<Label class="col-start-5 col-span-1 sm:hidden" name="quantity" text="Stock" />
			<img className="mt-3 col-start-1 col-span-1" alt={props.name} src={props.image} />
			<h3 className="mt-3 col-start-2 col-span-1">{props.code}</h3>
			<h3 className="mt-3 col-start-3 font-bold col-span-1">{props.name}</h3>
			<h3 className="mt-3 col-start-4 col-span-1">${props.price}</h3>
			<h3 className="mt-3 col-start-5 col-span-1 sm:hidden">{props.stock}</h3>
			<Link
				to={"/admin/editproduct/" + props.id}
				className="mt-3 mr-5 sm:mr-2 h-16 col-start-6 sm:col-start-5 
        col-span-1 bg-transparent hover:bg-yellow-500 text-yellow-800 font-semibold 
        hover:text-blanco py-2 px-4 border border-yellow-600 hover:border-transparent rounded">
				Editar
			</Link>
			<Link
				onClick={props.delete}
				to={"/admin/products"}
				className="mt-3 ml-5 sm:ml-2 h-16 col-start-7 sm:col-start-6 col-span-1 bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-blanco py-2 px-4 border border-rojo hover:border-transparent rounded">
				Eliminar
			</Link>
			<hr className="col-span-7 mt-5" />
		</div>
	);
}
