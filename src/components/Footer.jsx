import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/LogoFooter.jpg";
import { FiMail } from "react-icons/fi";
import { VscCallIncoming } from "react-icons/vsc";
import { BsHouseDoor } from "react-icons/bs";
import { BsPerson } from "react-icons/bs";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

function Footer() {
	return (
		<nav className="bg-negro grid sm:grid-cols-1 xs:grid-cols-2 grid-cols-3 mt-2">
			<div className="m-10 sm:mx-auto sm:col-span-2">
				<NavLink to="/MundoPc">
					<img src={Logo} alt="Logo MundoPc" />
				</NavLink>
			</div>

			<div className="mt-10 mb-5 text-blanco sm:mx-5">
				<ul>
					<li className="flex flex-in-line text-blanco text-xl">
						<BsPerson size="25" className="mt-1 mr-2" />
						Contacto
					</li>
					<li className="flex flex-in-line mt-2">
						<BsHouseDoor size="20" className="mt-1 mr-2" /> Maipu 121 (San Miguel de Tucuman,Argentina)
					</li>
					<li className="flex flex-in-line mt-2">
						<FiMail size="20" className="mt-1 mr-2" />
						mundopctuc@gmail.com
					</li>
					<li className="flex flex-in-line mt-2">
						<VscCallIncoming size="20" className="mt-1 mr-2" />
						4220187
					</li>
				</ul>
			</div>

			<div className="mt-10 sm:mx-5">
				<h3 className="text-blanco text-xl">Redes Sociales</h3>
				<ul className="text-rojo flex flex-in-line mt-2">
					<li className="justify-center mx-5">
						<a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/MundoPCTucson">
							<FiFacebook size="30" />
						</a>
					</li>
					<li className="justify-center">
						<a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/mundopc_tuc/">
							<FiInstagram size="30" />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Footer;
