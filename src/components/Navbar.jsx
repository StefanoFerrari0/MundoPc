import React from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="bg-negro text-blanco h-16">
            <div className="flex font-bold uppercase text-blanco justify-start">
            <NavLink to="/" className=" ml-5 mr-24 px-4 py-5">MundoPC</NavLink>
            <NavLink to="/productos" className="mx-24 px-4 py-5 hover:bg-rojo" activeClassName="bg-rojo">Productos</NavLink>
            <NavLink to="/servicio-tecnico" className="mx-24 px-4 py-5 hover:bg-rojo" activeClassName="bg-rojo">Servicio técnico</NavLink>
            <NavLink to="/carrito" className="mx-24 px-4 py-5 hover:bg-rojo" activeClassName="bg-rojo">Carrito</NavLink>
            <NavLink to="/login" className="ml-16 bg-rojo px-4 py-5" activeClassName="bg-rojo">Login</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;