import React, { Component } from 'react';
import Image from '../images/Registro.jpg';
import MainTitle from '../components/MainTitle';
import Subtitle from '../components/Subtitle';
import Input from '../components/Inputs';
import Label from '../components/Label';
import axios from'axios';

const url="https://localhost:44324/api/User"

class Registro extends Component {
    state={
      data:[],
      form:{
        firstname:'',
        lastname:'',
        email:'',
        password:''
      }
    
    }
    peticionget=()=>{
      axios.get(url).then(response=>{
        this.setState({data: response.data});
      })
    }

    handleChange=async e=>{
      e.persist();
      await this.setState({
        form:{
        ...this.state.form,
        [e.target.name]: e.target.value
        }
    });   
      console.log(this.state.form);
  }
     

    peticionPost=async()=>{
      delete this.state.form.id;
      axios.post(url,this.state.form).then(response=>{
        this.peticionget();
      }).catch(error=>{
        console.log(error.message);
      })
    }


    componentDidMount(){
      this.peticionget();

    }
  
    render() {
      return (
        <section className="grid grid-cols-2 grid-flow-col mr-20">
          <div className="bg-cover bg-left-top w-full h-full" style={{ backgroundImage: "url("+Image+")" }}></div>
            <div className="grid grid-cols-4 pt-20 pl-16">
             <MainTitle class="col-span-4" text="Registrate."/>
             <Subtitle class="col-span-3" text="Rellena los campos con tus datos y sé parte de nuestra familia."/>
                <form className="grid grid-cols-4 col-span-3 pt-10 " onSubmit={this.handleSubmit}>
                    <Label class="col-span-2" name="firstname" text="Nombre"/>
                    <Label class="col-span-2" name="lastname" text="Apellido"/>
                        <Input name="firstname" type="text" value={this.state.form.firstname}  onChange={this.handleChange} class="pl-5 col-span-2 mr-8"/>
                        <Input name="lastname" type="text" value={this.state.form.lastname} onChange={this.handleChange}  class="pl-5 col-span-2"/>
                    <Label class="pt-5 col-span-4" name="email" text="Correo electrónico"/>
                        <Input name="email" type="email" value={this.state.form.email} onChange={this.handleChange} placeholder="ej: mundopc@email.com" class="pl-5 col-span-4"/>
                    <Label class="pt-5 col-span-4" name="password" text="Contraseña"/>
                        <Input name="password" type="password" value={this.state.form.password} onChange={this.handleChange} class="pl-5 col-span-4"/>   
                    <button type="submit" onClick={()=>this.peticionPost()} className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-rojo rounded-lg col-span-4">Crear cuenta</button>
                </form>
            </div>
        </section>
    )
}

  
    
}

export default Registro;