import React, { Component } from 'react'
import Image from '../images/Registro.jpg'
import MainTitle from '../components/MainTitle'
import Subtitle from '../components/Subtitle'
import Input from '../components/Inputs'
import Label from '../components/Label'

class Registro extends Component {
    constructor() {
      super();

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.resetForm = this.resetForm.bind(this);
      this.state = {
        name: "",
        surname: "",
        email:"",
        password: "",
        password2: "",
        error: null
      };
    }
  
    render() {
      return (
        <section className="grid grid-cols-2 grid-flow-col mr-20">
          <div className="bg-cover bg-left-top w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
            <div className="grid grid-cols-4 pt-20 pl-16">
             <MainTitle class="col-span-4" text="Registrate."/>
             <Subtitle class="col-span-3" text="Rellena los campos con tus datos y sé parte de nuestra familia."/>
                <form className="grid grid-cols-4 col-span-3 pt-10 " onSubmit={this.handleSubmit}>
                    <Label class="col-span-2" name="name" text="Nombre"/>
                    <Label class="col-span-2" name="surname" text="Apellido"/>
                        <Input name="name" type="text" value={this.state.name}  onChange={this.handleChange} class="pl-5 col-span-2 mr-8"/>
                        <Input name="surname" type="text" value={this.state.surname} onChange={this.handleChange}  class="pl-5 col-span-2"/>
                    <Label class="pt-5 col-span-4" name="email" text="Correo electrónico"/>
                        <Input name="email" type="email" value={this.state.email} onChange={this.handleChange} placeholder="ej: mundopc@email.com" class="pl-5 col-span-4"/>
                    <Label class="pt-5 col-span-4" name="password" text="Contraseña"/>
                        <Input name="password" type="password" value={this.state.password} onChange={this.handleChange} class="pl-5 col-span-4"/>
                    <Label class="pt-5 col-span-4" name="password2" text="Confirmar contraseña"/>
                        <Input name="password2" type="password" value={this.state.password2} onChange={this.handleChange} class="pl-5 col-span-4"/>
                    <button type="submit" className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-rojo rounded-lg col-span-4">Crear cuenta</button>
                </form>
            </div>
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
        name: "",
        surname: "",
        email:"",
        password: "",
        password2: "",
        error: null
    });
  }

    handleSubmit(e) {
    e.preventDefault();
    
    //Acá va lo que conecta al back
  }
}

export default Registro;