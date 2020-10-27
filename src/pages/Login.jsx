import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../components/MainTitle'
import Subtitle from '../components/Subtitle'
import Input from '../components/Inputs'
import Label from '../components/Label'
import Image from '../images/Login.jpeg'
import axios from 'axios'
import userService from '../pages/userService'
import userEvent from '@testing-library/user-event'

const baseUrl="https://localhost:44324/api/User";


class Login extends Component {
  constructor(props) {
    super(props);

    userService.logout();

    this.state = {
        email: '',
        password: '',
        submitted: false,
        loading: false,
        error: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }
   
  handleSubmit(e) {
    e.preventDefault();

    this.setState({ submitted: true });
    const { email, password} = this.state;

    // stop here if form is invalid
    if (!(email && password)) {
        return;
    }

    this.setState({ loading: true });
    userService.login(email, password)
        .then(
            user => {
              console.log(JSON.parse(user));
                //const { from } = this.props.location.state || { from: { pathname: "/" } };
                //this.props.history.push(from);
            },
            error => this.setState({ error, loading: false })
        );


  }  
  
    render() {
      const { email, password, error, loading } = this.state;
      return (
        <section className="grid grid-cols-2 grid-flow-col ml-20">
            <div className="grid grid-cols-4 pt-20">
            <MainTitle class="col-span-4" text="Login."/>
             <Subtitle class="col-span-3" text="Inicia sesión rellenando tus datos en los siguientes campos."/>
                <form className="grid grid-cols-3 col-span-3 pt-10" onSubmit={this.handleSubmit}>
                    <Label class="col-span-3" name="email" text="Correo electrónico"/>
                        <Input value={email} onChange={this.handleChange} name="email" type="email"  placeholder="ej: mundopc@email.com" class="pl-5 col-span-3"/>
                    <Label class="pt-5 col-span-3" name="password" text="Contraseña"/>
                        <Input value={password} onChange={this.handleChange} name="password" type="password" class="pl-5 col-span-3"/>
                    <button type="submit" disabled={loading} className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 border border-rojo rounded-lg col-span-3">Iniciar sesión</button>
                    {
                      loading
                    }
                </form>
            <h4 className="font-medium text-gray-700 text-center pt-8 col-span-3">¿No tenes una cuenta? <Link to="/registro" className="text-rojo hover:font-bold hover:text-red-600">Registrate</Link></h4>
            <Link to="/recuperar-cuenta" className="font-medium pt-3 pb-5 text-rojo text-center hover:font-bold hover:text-red-600 col-span-3">¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="bg-content bg-center w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
        </section>
    )
  }

}

export default Login;