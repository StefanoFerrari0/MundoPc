import React, { Component } from "react";
import MainTitle from "../components/MainTitle";
import Subtitle from "../components/Subtitle";
import Input from "../components/Inputs";
import Label from "../components/Label";
import Image from "../images/RecuperarCuenta.jpg";

class RecuperarCuenta extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.state = {
      email: "",
      error: null,
    };
  }

  render() {
    return (
      <section className="grid grid-cols-2 xs:grid-cols-1 sm:grid-cols-1 xs:mx-auto sm:mx-auto mr-20">
        <div
          className="bg-cover bg-left-top w-full h-full"
          style={{ backgroundImage: "url(" + Image + ")" }}
        ></div>
        <div className="grid grid-cols-4 pt-20 pl-16">
          <MainTitle class="col-span-4 leading-snug" text={"Recupera"} />
          <MainTitle class="col-span-4 leading-snug" text={"tu cuenta."} />
          <Subtitle
            class="col-span-3"
            text="Ingresa tu correo electrónico para que recuperes el acceso a tu cuenta."
          />
          <form className="grid grid-cols-4 col-span-3 mb-10 pt-10 " onSubmit={this.handleSubmit}>
            <Label class="pt-5 col-span-4 xs:pt-2 sm:pt-2" name="email" text="Correo electrónico" />
            <Input
              name="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              placeholder="ej: mundopc@email.com"
              class="pl-5 col-span-4"
            />
            <button
              type="submit"
              className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-rojo rounded-lg col-span-4"
            >
              Recuperar cuenta
            </button>
          </form>
        </div>
      </section>
    );
  }

  handleChange = (e) => {
    const state = this.state;
    state[e.target.name] = e.target.value;
    this.setState(state);
  };

  resetForm() {
    this.setState({
      email: "",
      password: "",
      error: null,
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    //Acá va lo que conecta al back
  }
}

export default RecuperarCuenta;
