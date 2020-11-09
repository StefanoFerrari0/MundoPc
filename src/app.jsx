import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Productos from "./pages/Producto";
import ProductoId from "./pages/ProductoId";
import ServicioTecnico from "./pages/ServicioTecnico";
import ConsultaST from "./pages/ConsultaST";
import Carrito from "./pages/Carrito";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import RecuperarCuenta from "./pages/RecuperarCuenta";
import Products from "./pages/Admin/Products";
import NewProduct from "./pages/Admin/NewProduct";
import Reports from "./pages/Admin/Reports";
import NewReport from "./pages/Admin/NewReport";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

import Error from "./pages/Error";
//<Route exact path="/admin/products" component={Products} />
function App() {
	return (
		<Router>
			<Navbar/>
			<hr />
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/productos" component={Productos} />
				<Route exact path="/servicio-tecnico/:code" component={ConsultaST} />
				<Route exact path="/servicio-tecnico" component={ServicioTecnico} />
				<Route exact path="/producto/:id" component={ProductoId} />
				<Route exact path="/carrito" component={Carrito} />
				<Route exact path="/login" component={Login} />
				<Route exact path="/registro" component={Registro} />
				<Route exact path="/recuperar-cuenta" component={RecuperarCuenta} />

				<PrivateRoute exact path="/admin/products" component={Products} />
				
				<Route exact path="/admin/newproduct" component={NewProduct} />
				<Route exact path="/admin/editproduct/:id" component={NewProduct} />
				<Route exact path="/admin/reports" component={Reports} />
				<Route exact path="/admin/editreport/:id" component={NewReport} />
				<Route exact path="/admin/newreport" component={NewReport} />

				<Route component={Error} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
