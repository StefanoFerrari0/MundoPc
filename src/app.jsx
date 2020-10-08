import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Productos from './pages/Producto';
import ServicioTecnico from './pages/ServicioTecnico';
import Carrito from './pages/Carrito';
import Login from './pages/Login';
import Registro from './pages/Registro';

function App() {
    return (
        <Router>
            <div>
                <Navbar/>
            <hr/>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/productos">
                    <Productos/>
                </Route>
                <Route path="/servicio-tecnico">
                    <ServicioTecnico/>
                </Route>
                <Route path="/carrito">
                    <Carrito/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/registro">
                    <Registro/>
                </Route>
            </Switch>
            </div>
        </Router>
    );
}

export default App;