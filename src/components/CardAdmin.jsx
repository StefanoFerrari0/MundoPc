import React from "react";
import { Link } from "react-router-dom";

function CardAdmin(props) {
	return (
		<Link to={`/producto/${props.id}`}>
			<article className="col-span-1 xs:w-full sm:3/4 md:w-full w-3/4 grid grid-cols-2 rounded rounded-lg border border-rojo bg-negro overflow-hidden shadow-lg">
				
				<div className="col-span-2 px-6 py-4">
				</div>
			</article>
		</Link>
	);
}

export default CardAdmin;
