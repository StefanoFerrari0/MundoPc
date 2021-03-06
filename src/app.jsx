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
import EditReport from "./pages/Admin/EditReport";
import Footer from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";
import Error from "./pages/Error";
import HomeAdmin from "./pages/Admin/HomeAdmin";

function App() {
	return (
		<Router>
			<Navbar />
			<hr />
			<Switch>
				<Route exact path="/MundoPc" component={Home} />
				<Route exact path="/MundoPc/productos" component={Productos} />
				<Route exact path="/MundoPc/servicio-tecnico" component={ServicioTecnico} />
				<Route exact path="/MundoPc/servicio-tecnico/:code" component={ConsultaST} />

				<Route exact path="/MundoPc/producto/:id" component={ProductoId} />
				<Route exact path="/MundoPc/carrito" component={Carrito} />
				<Route exact path="/MundoPc/login" component={Login} />
				<Route exact path="/MundoPc/registro" component={Registro} />
				<Route exact path="/MundoPc/recuperar-cuenta" component={RecuperarCuenta} />

				<PrivateRoute exact path="/MundoPc/admin/homeadmin" component={HomeAdmin} />
				<PrivateRoute exact path="/MundoPc/admin/products" component={Products} />
				<PrivateRoute exact path="/MundoPc/admin/newproduct" component={NewProduct} />
				<PrivateRoute exact path="/MundoPc/admin/editproduct/:id" component={NewProduct} />
				<PrivateRoute exact path="/MundoPc/admin/reports" component={Reports} />
				<PrivateRoute exact path="/MundoPc/admin/editreport/:id" component={EditReport} />
				<PrivateRoute exact path="/MundoPc/admin/newreport" component={NewReport} />

				<Route component={Error} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
