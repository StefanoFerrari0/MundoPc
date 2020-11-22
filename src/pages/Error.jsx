import React from "react";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import { Link } from "react-router-dom";

const Error = () => {
	return (
		<div className="pattern flex align-center justify-center text-center flex-col h-screen">
			<div className="bg-blanco m-auto p-10 border border-rojo rounded-lg o">
				<MainTitle text="¡Oops! Error 404 😭" />
				<Subtitle text="La página a la cual usted trató de acceder no existe." class="font-medium" />
				<button className="bg-rojo text-blanco hover:bg-negro hover:text-blanco font-bold mt-10 mx-auto py-2 px-4 mb-5 border border-rojo rounded-lg w-1/2">
					<Link to="/MundoPc">Volver al Home</Link>
				</button>
			</div>
		</div>
	);
};

export default Error;
