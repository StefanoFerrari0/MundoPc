import React from "react";
import { NavLink } from "react-router-dom";
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
						<img alt="Logo MundoPc" />
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

			<div className="grid-3 font-robotoC text-rojo width-80% justify-center  text-center gap-2 pr-40 py-12 ">
				<ul className="text-blanco text-lg">
					Redes sociales
					<li className="flex flex-in-line hover justify-center text-rojo">
						<FiFacebook />
						<a target="_blank" href="www.facebook.com/MundoPCTucson">
							Facebook
						</a>
					</li>
					<li className="flex flex-in-line hover justify-center text-rojo">
						<FiInstagram />
						<a target="_blank" href="https://www.instagram.com/mundopc_tuc/">
							Instagram
						</a>
					</li>
					<li></li>
				</ul>
			</div>
		</nav>
	);
}

export default Footer;
