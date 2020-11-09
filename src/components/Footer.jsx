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
		<nav
			className="grid grid-cols justify-between bg-negro  px-14 font-robotoC 
                        text-center:22 place-content-evenly xs:static xs:grid-cols-1 
                        xs:justify-center lg:grid-cols-3 lg:justify-center xl:grid-cols-3">
			<div className="grid-1-static ml-5 mr-24 px-1 py-12 relative object-static">
				<span>
					<NavLink to="/">
						<img src={Logo} alt="Logo MundoPc" />
					</NavLink>
				</span>
			</div>

			<div className="grid-2 px-24 justify-between text-rojo font-robotoC width-50%  text-center relative block py-10 gap-2">
				<ul>
					<li className="flex flex-in-line">
						<BsPerson />
						Contacto
					</li>
					<li className="flex flex-in-line">
						<BsHouseDoor /> Maipu 121 (San Miguel de Tucuman,Argentina)
					</li>
					<li className="flex flex-in-line">
						<FiMail />
						mundopctuc@gmail.com
					</li>
					<li className="flex flex-in-line">
						<VscCallIncoming />
						4220187
					</li>
				</ul>
			</div>

			<div className="flex flex-in-line font-robotoC text-rojo width-80% justify-center text-center gap-2 pr-40 py-12 text-lg">
				<ul className="text-blanco text-xl">
					Redes sociales
					<li className="justify-center text-rojo">
						<a target="_blank" href="www.facebook.com/MundoPCTucson">
							<FiFacebook />
						</a>
					</li>
					<li className="justify-center text-rojo">
						<a target="_blank" href="https://www.instagram.com/mundopc_tuc/">
							<FiInstagram />
						</a>
					</li>
					<li></li>
				</ul>
			</div>
		</nav>
	);
}

export default Footer;
