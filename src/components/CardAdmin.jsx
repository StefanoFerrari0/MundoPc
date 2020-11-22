import React from "react";
import { Link } from "react-router-dom";

function CardAdmin(props) {
	return (
		<Link to={`/MundoPc/admin/${props.link}`}>
			<div className="p-2 sm:p-10 text-center cursor-pointer text-white">
				<div className="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-rojo hover:bg-green-600 transition duration-500">
					{props.icon}
					<div className="space-y-5">
						<div className="font-bold text-3xl mb-2">{props.name}</div>
					</div>
				</div>
			</div>
		</Link>
	);
}

export default CardAdmin;
