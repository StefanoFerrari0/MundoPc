import React, { Component } from "react";
import MainTitle from "../../components/MainTitle";
import Input from "../../components/Inputs";
import { Link } from "react-router-dom";
import ProductItemAdmin from "../../components/ProductItemAdmin";
import ProductService from "../../services/prodService";

export default class Products extends Component {
  constructor(props) {
    super(props);
    this.retrieveProducts = this.retrieveProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);

    this.state = {
      products: [],
      currentProduct: "",
      currentId: -1,
      search: "",
    };
  }
  //faltaria hacer la busqueda https://www.cdata.com/kb/articles/apiserver-react.rst
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
    console.log("retrieveProducts state.products: " + this.state.products);
  }

  componentDidMount() {
    this.retrieveProducts();
    console.log("didMount state.products: " + this.state.products);
  }

  deleteProduct = (idProduct) => {
    console.log("Id del producto seleccionado:" + idProduct);
    //si funciona pero borra todo de cheto mal
    //ProductService.delete(idProduct).then(res=>{
    //console.log(res.status);
    //})
  };

  searchProduct = () => {
    this.retrieveProducts(this.state.search);
  };

  handleChange =(e)=>{
    this.setState({search: e.target.value})
  }

  render() {
    const { search, productId, isUpdate } = this.state;

    return (
      <div className="container mx-auto">
        <MainTitle class="mt-10 mx-5" text="Productos." />
        <form onSubmit={this.searchProduct}>
          <Input
            name="search"
            type="search"
            placeholder="Buscar producto"
            onChange={this.handleChange}
            class="pl-5 mx-5"
          />
          <button
            type="submit"
            className="bg-rojo hover:bg-red-500 text-blanco font-bold mt-10 py-2 px-10 mb-5 mr-10 border border-rojo rounded-lg"
          >
            Buscar
          </button>
        </form>
        <Link
          to="/admin/newproduct"
          className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 mx-5 border border-green-600 rounded-lg"
        >
          Crear producto
        </Link>

        {this.state.products.map((_p) => (
          <ProductItemAdmin
            key={_p.id}
            id={_p.id}
            image={_p.image}
            code={_p.code}
            name={_p.name}
            price={_p.price}
            stock={_p.stock}
            delete={this.deleteProduct(_p.id)}
          />
        ))}
      </div>
    );
  }
}
