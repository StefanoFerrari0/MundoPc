import React, { useState, useEffect } from "react";
import Logo from "../images/LogoNavbar.png";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { logout } from "../services/userService";

const Navbar = ({}) => {
	const [isExpanded, toggleExpansion] = useState(false);
	const [isLogged, loggedFunction] = useState(false);

	useEffect(() => {
		var user = JSON.parse(localStorage.getItem("user"));
		if (user !== null) {
			loggedFunction(true);
		} else {
			loggedFunction(false);
		}
	});

	return (
		<nav className="flex items-center justify-between flex-wrap bg-negro p-6 font-robotoC">
			<NavLink to="/MundoPc" className="">
				<img src={Logo} className="w-48 sm:40" alt="Logo MundoPc" />
			</NavLink>
			<div className="block lg:hidden md:hidden xl:hidden">
				<button
					className="flex items-center px-3 py-2 border rounded text-red-200 border-rojo hover:text-white hover:border-white"
					onClick={() => toggleExpansion(!isExpanded)}>
					<svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
						<title>Menu</title>
						<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
					</svg>
				</button>
			</div>
			<div
				className={`${
					isExpanded ? `block` : `hidden`
				}  xs:ml-0 sm:ml-0 ml-20 md:ml-0 xs:ml-0  w-full block flex-grow lg:flex lg:items-center lg:w-auto md:flex md:items-center md:w-auto xl:flex xl:items-center xl:w-auto`}>
				<div className="uppercase font-bold text-lg ml-12 lg:flex-grow md:flex-grow xl:flex-grow">
					<NavLink
						to="/MundoPc/productos"
						className="block mt-4 lg:inline-block md:inline-block xl:inline-block
                        lg:mt-0 md:mt-0 xl:mt-0 text-blanco hover:text-rojo mr-20 md:mr-10">
						Productos
					</NavLink>
					<NavLink
						to="/MundoPc/servicio-tecnico"
						className="block mt-4 lg:inline-block md:inline-block xl:inline-block
                        lg:mt-0 md:mt-0 xl:mt-0 text-blanco hover:text-rojo mr-20 md:mr-10">
						Servicio técnico
					</NavLink>
				</div>
				<div className="uppercase font-bold text-lg xs:ml-12 sm:ml-12">
					<NavLink
						to="/MundoPc/carrito"
						className="block mr-20 mt-4 md:mr-10 lg:inline-block md:inline-block xl:inline-block
                        lg:mt-0 md:mt-0 xl:mt-0 text-blanco hover:text-rojo">
						<FiShoppingCart size={30} />
					</NavLink>
				</div>
				<div className="uppercase font-bold text-lg xs:ml-12 sm:ml-12">
					<NavLink
						to={!isLogged ? "/MundoPc/login" : "/MundoPc"}
						onClick={!isLogged ? null : logout}
						className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:rojo hover:bg-rojo mt-4 lg:mt-0 md:mt-0 xl:mt-0">
						{!isLogged ? "Login" : "Logout"}
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
