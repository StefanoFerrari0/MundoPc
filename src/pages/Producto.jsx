import React, { Component } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import ImageBanner from "../images/bannerHome.jpg";
import CardProduct from "../components/CardProduct";

export default class Products extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      search: "",
    };
  }

  componentDidMount() {}

  render() {
    return (
      <>
        <Header
          image={ImageBanner}
          title="¿Te enteraste de nuestras últimas ofertas?"
          subtitle="¡Pasá a verlas y añadilas a tu carrito presupuestario!"
          button="Ofertas"
        />
        <MainTitle class="text-center mt-10" text="Productos." />
        <div className="pt-2 relative mx-auto text-gray-600">
          <input
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
            type="search"
            name="search"
            placeholder="Search"
          />
          <button type="submit" className="absolute right-0 top-0 mt-5 mr-4"></button>
        </div>
        <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 mx-auto gap-3 mt-5 w-4/5">
          {this.state.products.map((_p) => (
            <CardProduct key={_p.id} id={_p.id} name={_p.description} price={_p.price} image={_p.image} />
          ))}
        </div>
      </>
    );
  }
}
