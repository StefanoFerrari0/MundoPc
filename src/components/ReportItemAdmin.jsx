import React from "react";
import Label from "./Label";
import { Link } from "react-router-dom";

export default function ReportItemAdmin(props) {
  return (
    <div className="grid sm:grid-cols-5 grid-cols-6 mx-auto pt-10 mt-5 font-robotoC sm:w-3/3 xl:w-4/5 xl:mx-5">
      <Label class="col-span-1" name="code" text="Código" />
      <Label class="col-span-1" name="date" text="Fecha de ingreso" />
      <Label class="col-span-1" name="name" text="Nombre" />
      <Label class="col-span-1 sm:hidden" name="ready" text="¿Listo para retirar?" />
      <h3 className="mt-3 col-start-1 col-span-1">{props.code}</h3>
      <h3 className="mt-3 col-start-2 col-span-1">{props.date}</h3>
      <h3 className="mt-3 col-start-3 font-bold col-span-1">{props.name}</h3>
      <h3 className="mt-3 col-start-4 col-span-1 sm:hidden">{props.ready}</h3>
      <Link
				to={`/admin/editreport/${props.id}`} 
        className="mt-3 mr-5 sm:mr-2 h-16 sm:col-start-5 col-span-1 bg-transparent hover:bg-yellow-500 text-yellow-800 font-semibold hover:text-blanco py-2 px-4 border border-yellow-600 hover:border-transparent rounded">
        Editar
      </Link>
      <button onClick={props.delete}
        className="mt-3 ml-5 sm:ml-2 h-16 sm:col-start-6 col-span-1 bg-transparent hover:bg-rojo text-rojo font-semibold hover:text-blanco py-2 px-4 border border-rojo hover:border-transparent rounded">
        ✖
      </button>
      <hr className="col-span-7 mt-5" />
    </div>
  );
}
