import React, { Component } from "react";
import MainTitle from "../../components/MainTitle";
import Label from "../../components/Label";
import Input from "../../components/Inputs";
import ProductService from "../../services/prodService.js";
import BrandService from "../../services/brandService";
import CategoryService from "../../services/categoryServices";

export default class NewProduct extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.uploadImage = this.uploadImage.bind(this);

    this.state = {
      id: this.props.match.params.id != null ? this.props.match.params.id : -1,
      code: "",
      name: "",
      description: "",
      costprice: 0,
      stock: 0,
      image: "",
      brandid: -1,
      categoryid: -1,
      submitted: false,
      loading: false,
      error: "",
      aliquot:10,
      categories: [],
      brands:[]
    };
  }

  componentDidMount() {
    BrandService.getAll().then((b) => {
      this.setState({brands: b.data});
    });

    CategoryService.getAll().then((c) => {
      this.setState({categories: c.data});
    })

    let _id = this.state.id;
    if (_id !== -1) {

      ProductService.getById(_id).then((product) => {
        this.setState({
          code: product.data.code,
          name: product.data.name,
          description: product.data.description,
          aliquot: product.data.aliquot,//no esta en el form
          costprice: product.data.costprice,
          stock: product.data.stock,
          image: product.data.image,
          brandid: product.data.brandid,
          categoryid: product.data.categoryid
          
        }, () =>{console.log(this.state.image);});
        
      });
    }
  }

  render() {
    let { image } = this.state;
    let $image = null;
    if (image) {
      $image = <img className="col-span-2" alt="Imagen subida" src={image} />;
    } else {
      $image = (
        <img
          className="col-span-2"
          alt="Imagen para subir"
          src="https://dummyimage.com/640x360/211F2D/FFFDFD"
        />
      );
    }
    const { id } = this.state;

    return (
      <section className="mx-64 xs:mx-auto sm:mx-auto md:mx-10 lg:mx-40">
        <form
          className="grid grid-cols-4 col-span-3 pt-10 mx-40 xs:mx-5 sm-mx-5 md-mx-20"
          onSubmit={this.handleSubmit}
        >
          <MainTitle class="col-span-4 mb-5" text={id === -1 ? "Nuevo producto." : "Editar producto"} />
          <Label class="col-span-2" name="code" text="Código" />
          <Label class="col-span-2" name="stock" text="Stock" />
          <Input
            class="pl-5 col-span-2 mr-8 mt-2"
            name="code"
            type="text"
            value={this.state.code}
            onChange={this.handleChange}
          />
          <Input
            class="pl-5 col-span-2 mt-2"
            name="stock"
            type="number"
            value={this.state.stock}
            onChange={this.handleChange}
          />
          <Label class="col-span-4 pt-5" name="name" text="Nombre del producto" />
          <Input
            class="pl-5 col-span-4  mt-2"
            name="name"
            type="text"
            value={this.state.name}
            onChange={this.handleChange}
          />
          <Label class="pt-5 col-span-4" name="description" text="Descripción" />
          <textarea
            name="description"
            rows="8"
            cols="50"
            value={this.state.description}
            onChange={this.handleChange}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
          ></textarea>
          <Label class="col-span-4 pt-5" name="img" text="Imagen" />
          <img className="col-span-2" alt="Imagen subida" src={image} />
          <input
            className="pl-5 col-span-2 my-auto"
            type="file"
            name="img"
            accept=".jpeg, .png, .jpg"
            onChange={this.uploadImage}
          />
          <Label class="col-span-2 pt-5" name="price" text="Precio" />
          <Label class="col-span-2 pt-5 mx-5" name="category" text="Categoria" />
          <Input
            class="col-span-2 mt-2"
            name="costprice"
            type="number"
            value={this.state.costprice}
            onChange={this.handleChange}
          />

          <select name="selectcategory" value={this.state.categoryid} onChange={this.handleChange}
            className="col-span-2 mx-5 mt-2 block appearance-none bg-blanco border border-negro hover:border-rojo rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {this.state.categories.map((_c) => (
              <option value={_c.id} key={_c.id}>{_c.description}</option>
            ))}
          </select>

          <Label class="col-span-2 pt-5 mx-5" name="brand" text="Marca" /> 
          <select name="selectbrand" value={this.state.brandid} onChange={this.handleChange}    
            className="col-span-2 mx-5 mt-2 block appearance-none bg-blanco border border-negro hover:border-rojo rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            {this.state.brands.map((_b) => (
              <option value={_b.id} key={_b.id}>{_b.description}</option>
            ))}
          </select>

          <button
            type="submit"
            className="bg-verde text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-green-600 rounded-lg col-span-4"
          >
            {id === -1 ? "Crear producto" : "Editar producto"}
          </button>
        </form>
      </section>
    );
  }

  handleChange = (event) => {
    if (event.target.name === "code") {
      this.setState({ [event.target.name]: event.target.value });
      return;
    }    
    if (event.target.name === "selectcategory"){
      this.setState({ categoryid: Number(event.target.value)})
      return;
    }
    if (event.target.name === "selectbrand"){
      this.setState({ brandid: Number(event.target.value)})
      return;
    }
    const value = event.target.type === "number" ? Number(event.target.value) : event.target.value;

    this.setState({ [event.target.name]: value });

    console.log(this.state);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitted: true });

    // aqui validaciones please
    if (!(this.state.code && this.state.description)) {
      return;
    }

    this.setState({ loading: true });

    var data = {
      code: this.state.code,
      name: this.state.name,
      description: this.state.description,
      costprice: this.state.costprice,
      stock: this.state.stock,
      image: this.state.image,
      aliquot: this.state.aliquots,
      brandid: this.state.brandid,
      categoryid: this.state.categoryid
    };
    
    if (this.state.id !== -1) {
      data.id= Number(this.state.id);
      console.log(data);
      ProductService.update(this.state.id, data).then((res) => {
        
        const { from } = this.props.location.state || {
          from: { pathname: "/admin/products" },
        };
        this.props.history.push(from);
      });
    } else {
      ProductService.create(data).then((res) => {
        const { from } = this.props.location.state || {
          from: { pathname: "/admin/products" },
        };
        this.props.history.push(from);
      });
    }
    //alert("fallo la peticion producto");
  }

  uploadImage(e) {
    let file = e.target.files[0];
    if (file) {
      //this.setState({img: URL.createObjectURL(file)});
      
      const reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onloadend = () =>  {
          const base64data = reader.result;
          console.log(base64data);
          this.setState({
            image: base64data,
            //img: URL.createObjectURL(file),
          });
      }     
        
    }
  }
}
