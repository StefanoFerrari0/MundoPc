import React, { Component }from 'react'
import MainTitle from '../../components/MainTitle'
import Label from '../../components/Label'
import Input from '../../components/Inputs'
import {post} from '../../services/productService'

export default class NewProduct extends Component{
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.uploadImage = this.uploadImage.bind(this);

        this.state = {
          code: '',
          description: '',
          price:0,
          stock:0,
          img:'',
          image:'',
          submitted: false,
          loadind: false,
          error: '',
          category: ''
        };
    }

    render(){
      let {img} = this.state;
      let $img = null;
        if (img) {
          $img = (<img img className="col-span-2" alt="Imagen subida" src={img}/>);
        }
        else{
          $img = (<img className="col-span-2" alt="Imagen para subir"src="https://dummyimage.com/640x360/211F2D/FFFDFD"/>)
        }

        return (
          <section className="mx-64 xs:mx-auto sm:mx-auto md:mx-10 lg:mx-40">
            <form className="grid grid-cols-4 col-span-3 pt-10 mx-40 xs:mx-5 sm-mx-5 md-mx-20" onSubmit={this.handleSubmit}>
            <MainTitle class="col-span-4 mb-5" text="Nuevo producto."/>
                    <Label class="col-span-2" name="code" text="Código"/>
                    <Label class="col-span-2" name="stock" text="Stock"/>
                        <Input class="pl-5 col-span-2 mr-8 mt-2" name="code" type="number" value={this.state.code}  onChange={this.handleChange}/>
                        <Input class="pl-5 col-span-2 mt-2" name="stock" type="number" value={this.state.stock} onChange={this.handleChange}/>
                         <Label class="col-span-4 pt-5" name="name" text="Nombre del producto"/>
                        <Input class="pl-5 col-span-4  mt-2" name="name" type="text" value={this.state.name}  onChange={this.handleChange}/>
                    <Label class="pt-5 col-span-4" name="description" text="Descripción"/>
                        <textarea name="description" rows="8" cols="50" value={this.state.description} onChange={this.handleChange} className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"></textarea>
                    <Label class="col-span-4 pt-5" name="img" text="Imagen"/>
                    {$img}
                      <input className="pl-5 col-span-2 my-auto" type="file" name="img" accept=".jpeg, .png, .jpg" onChange={this.uploadImage}/>
                    <Label class="col-span-2 pt-5" name="price" text="Precio"/>
                    <Label class="col-span-2 pt-5 mx-5" name="category" text="Categoria"/>
                        <Input class="col-span-2 mt-2" name="price" type="number" value={this.state.price} onChange={this.handleChange}/>
                        <select className="col-span-2 mx-5 mt-2 block appearance-none bg-blanco border border-negro hover:border-rojo rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                            <option>Aca deberia</option>        
                            <option>haber</option>
                            <option>categorias</option>
                        </select>
                    <button type="submit" className="bg-verde text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-green-600 rounded-lg col-span-4">Crear producto</button>
            </form>
          </section>
        )
    }

    handleChange = (event) => {
      if (event.target.name === "code")
      {
        this.setState({[event.target.name]: event.target.value});
        return;
      }

      const value = event.target.type === "number" ? 
        Number(event.target.value) : 
        event.target.value;

      this.setState({[event.target.name]: value});
      console.log(this.state);
    }   
    
    handleSubmit(e) {
      e.preventDefault();
      this.setState({ submitted: true });

        // stop here if form is invalid
        if (!(this.state.code && this.state.description)) {
            return;
        }

        this.setState({ loading: true }); 

        const data = {
            code: this.state.code,
            description: this.state.description,
            saleprice: this.state.price,
            stock: this.state.stock,
            image: this.state.image
        }  
        console.log(data);
        post(data).then(res=>
        {    
            const { from } = this.props.location.state || { from: { pathname: "/" } };
            this.props.history.push(from);
        });
    }    

    uploadImage(e) {
      //e.preventDefault();

      let file = e.target.files[0];
      if (file){
        this.setState({img: URL.createObjectURL(file)});

        const reader = new FileReader();
        reader.onloadend = (e) => {
          let binaryString = e.target.result;
          this.setState({
            image: btoa(binaryString)  
          });
        }
        reader.readAsDataURL(file);
      }
    }  

    
}
