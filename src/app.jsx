import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Productos from './components/Producto';
import ServicioTecnico from './components/ServicioTecnico';
import Carrito from './components/Carrito';
import Login from './components/Login';

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
            </Switch>
            </div>
        </Router>
    );
}

export default App;