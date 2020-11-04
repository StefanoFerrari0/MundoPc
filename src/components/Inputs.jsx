import React from "react";

function Inputs(props) {
	return (
		<input
			type={props.type}
			name={props.name}
			id={props.name}
			placeholder={props.placeholder}
			value={props.value}
			onChange={props.onChange}
			className={
				"appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo " +
				props.class
			}
		/>
	);
}

export default Inputs;
