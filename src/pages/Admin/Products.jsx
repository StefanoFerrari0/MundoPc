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
  
  
  retrieveProducts() {
    //(search){}
      ProductService.getAll()
        .then((products) => {
          this.setState({
            products: products.data, //veremos
          });  
        }).catch((e) => {
          console.log("catch error: " + e);
        });
    
  }

	componentDidMount() {
		this.retrieveProducts();
	}

 
  deleteProduct(idProduct){
    if (window.confirm("Realmente desea borrar el Producto?"))
    {
      ProductService.delete(idProduct).then(res=>{
        console.log(res.status);
        this.retrieveProducts();
      })
    }
  };

	searchProduct = () => {
		this.retrieveProducts(this.state.search);
	};

  searchProduct = (e) => {
    e.preventDefault();
    ProductService.getByCode(this.state.search)
        .then((res) => {
          this.setState({
            products: res.data, //veremos
          });  
        }).catch((e) => {
          console.log("catch error: " + e);
        });
  };

  handleChange = (e) => {
    const state = this.state;
		state[e.target.name] = e.target.value;
		this.setState(state);
		console.log(this.state);
  }

  render() {
    const { search } = this.state;

    return (
      <div className="container mx-auto">
        <MainTitle class="mt-10 mx-5" text="Productos." />
        <form>
          <Input
            name="search"
            type="search"
            placeholder="Buscar producto"
            onChange={this.handleChange}
            class="pl-5 mx-5"
          />
          <button
            onClick={this.searchProduct}
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
            delete={() => this.deleteProduct(_p.id)}
          />
        ))}
      </div>
    );
  }
}
