import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MainTitle from '../components/MainTitle'
import Subtitle from '../components/Subtitle'
import Input from '../components/Inputs'
import Label from '../components/Label'
import Image from '../images/Login.jpeg'


class Login extends Component {
    constructor() {
      super();
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetForm = this.resetForm.bind(this);
      this.state = {
        email: "",
        password: "",
        error: null
      };
    }
  
    render() {
      return (
        <section className="grid grid-cols-2 grid-flow-col ml-20">
            <div className="grid grid-cols-4 pt-20">
            <MainTitle class="col-span-4" text="Login."/>
             <Subtitle class="col-span-3" text="Inicia sesión rellenando tus datos en los siguientes campos."/>
                <form className="grid grid-cols-3 col-span-3 pt-10" onSubmit={this.handleSubmit}>
                    <Label class="col-span-3" name="email" text="Correo electrónico"/>
                        <Input value={this.state.email} onChange={this.handleChange} name="email" type="email"  placeholder="ej: mundopc@email.com" class="pl-5 col-span-3"/>
                    <Label class="pt-5 col-span-3" name="password" text="Contraseña"/>
                        <Input value={this.state.password} onChange={this.handleChange} name="password" type="password" class="pl-5 col-span-3"/>
                    <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 border border-rojo rounded-lg col-span-3">Iniciar sesión</button>
                </form>
            <h4 className="font-medium text-gray-700 text-center pt-8 col-span-3">¿No tenes una cuenta? <Link to="/registro" className="text-rojo hover:font-bold hover:text-red-600">Registrate</Link></h4>
            <Link to="/recuperar-cuenta" className="font-medium pt-3 pb-5 text-rojo text-center hover:font-bold hover:text-red-600 col-span-3">¿Olvidaste tu contraseña?</Link>
            </div>
            <div className="bg-content bg-center w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
        </section>
    )
    }


    handleChange = (e) => {
    const state = this.state
    state[e.target.name] = e.target.value;
    this.setState(state);
    }   

    resetForm() {
    this.setState({
      email: "",
      password: "",
      error: null
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    
    //Acá va lo que conecta al back
  }

}

export default Login;