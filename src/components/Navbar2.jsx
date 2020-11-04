import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/Logo.jpg";
import { AiOutlineShoppingCart } from "react-icons/ai";

function Navbar() {
	return (
		<nav className="flex justify-between  bg-negro  font-robotoC text-center:22">
			<span>
				<NavLink to="/" className=" mx-22 ml-5 mr-24 px-1 py-2 relative">
					<img src={logo} alt="Logo MundoPc" />
				</NavLink>
			</span>

			<div className="h-44  font-bold uppercase text-blanco justify-center width-30% inline-flex ">
				<ul className="flex font-auto uppercase text-blanco  width-30%  text-center relative block xs:hidden sm:hidden lg:hidden  ">
					<li className="flex flex-in-line">
						<NavLink
							to="/productos"
							className="mx-24 w-full px-4 py-8 relative hover:bg-rojo"
							activeClassName="bg-rojo">
							Productos
						</NavLink>
					</li>
					<li className="flex flex-in-line">
						<NavLink
							to="/servicio-tecnico"
							className="mx-24 w-full px-4 py-8 relative hover:bg-rojo"
							activeClassName="bg-rojo">
							Servicio técnico
						</NavLink>
					</li>
					<li className="flex flex-in-line">
						<NavLink to="/carrito" className="mx-auto relative px-4 py-8 size:3 hover:bg-rojo">
							<AiOutlineShoppingCart />
						</NavLink>
					</li>
					<li className="flex flex-in-line">
						<NavLink
							to="/login"
							className="ml-16  bg-rojo px-4 py-8 relative  text-center"
							activeClassName="bg-rojo ">
							Login
						</NavLink>
					</li>
				</ul>
			</div>
		</nav>
	);
}
export default Navbar;
