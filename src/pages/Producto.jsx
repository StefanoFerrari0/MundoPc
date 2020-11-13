import React, { Component } from "react";
import Header from "../components/Header";
import MainTitle from "../components/MainTitle";
import ImageBanner from "../images/bannerHome.jpg";
import CardProduct from "../components/CardProduct";
import ProductService from "../services/prodService";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      products: [],
      search: "",
    };
  }

  componentDidMount() {
    ProductService.getAll()
        .then((products) => {
          this.setState({
            products: products.data, //veremos
          });  
        }).catch((e) => {
          console.log("catch error: " + e);
        });
  }


  retrieveProducts(txt) {
    //(search){}
    ProductService.getByCode(txt) 
      .then((products) => {
        let _products = products.data;

        this.setState({
          products: _products, //todo ok
        });
        //console.log(response.data);
      })
      .catch((e) => {
        console.log("catch error: " + e);
      });
    //console.log("retrieveProducts state.products: " + this.state.products);
  }

  handleChange(e){
    this.setState({search: e.target.value})
  }

  searchProduct(){
    this.retrieveProducts(this.state.search);
  }

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
            onChange={this.handleChange}
            
          />
          <button type="button" onClick={this.searchProduct} className="absolute right-0 top-0 mt-5 mr-4"></button>
        </div>
        <div className="grid grid-cols-4 xs:grid-cols-2 sm:grid-cols-2 mx-auto gap-3 mt-5 w-4/5">
          {this.state.products.map((_p) => (
            <CardProduct key={_p.id} id={_p.id} name={_p.name} price={_p.price} image={_p.image}/>
          ))}
        </div>
      </>
    );
  }
}
