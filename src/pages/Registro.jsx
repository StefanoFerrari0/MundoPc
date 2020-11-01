import React, { Component } from 'react'
import Image from '../images/Registro.jpg'
import MainTitle from '../components/MainTitle'
import Subtitle from '../components/Subtitle'
import Input from '../components/Inputs'
import Label from '../components/Label'
import { post } from '../services/userService'
 
export default class Registro extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state={
      email: '',
      password: '',
      firstname:'',
      lastname:'',
      submitted: false,
      loadind: false,
      password2:'',
      error: ''
    
    }
  }
    render() {
      return (
        <section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 xs:mx-auto sm:mx-auto mr-20">
          <div className="bg-cover bg-left-top w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
            <div className="grid grid-cols-4 pt-20 pl-16">
             <MainTitle class="col-span-4" text="Registrate."/>
             <Subtitle class="col-span-3" text="Rellena los campos con tus datos y sé parte de nuestra familia."/>
                <form className="grid grid-cols-4 col-span-3 pt-10" onSubmit={this.handleSubmit}>
                    <Label class="col-span-2" name="name" text="Nombre"/>
                    <Label class="col-span-2" name="surname" text="Apellido"/>
                        <Input name="firstname" type="text" value={this.state.firstname} onChange={this.handleChange} class="pl-5 col-span-2 mr-8"/>
                        <Input name="lastname" type="text" value={this.state.lastname} onChange={this.handleChange}  class="pl-5 col-span-2"/>
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
    
    handleChange=async e=>{
      e.persist();
      await this.setState({ [e.target.name]: e.target.value}); 
    }

    handleSubmit=async()=>{      
      this.setState({ submitted: true });

      const data = {
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname,
      }

      //una validacion de vez en cuando viene bien
      if(!(data.password === this.state.password2)){
        alert("las contraseñas no coinciden");
        return;
      }       

      // stop here if form is invalid
      if (!(data.email && data.password && data.firstname && data.lastname)) {
        return;
      }

      //bandera para animacion de carga
      this.setState({ loading: true }); 

      post(data).then(res=>
      {
        if (res === 200){
          const { from } = this.props.location.state || { from: { pathname: "/login" } };
          this.props.history.push(from);
        }
      });
    }

}