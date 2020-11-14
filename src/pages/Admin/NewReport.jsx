import React, { Component } from "react";
import MainTitle from "../../components/MainTitle";
import Label from "../../components/Label";
import Input from "../../components/Inputs";
import TechnicalServiceService from "../../services/techicalSService";
import ProductRepairService from "../../services/prodRepairService";


export default class NewReport extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      serialNumber: "",       //required
      observations: "",       //required
      accesoriesReceived: "",
      equipamentFailure: "",  //required
      dateReceived: "",       //required
      serviceStatus: 0,       //required
      dateStatus: "",
      totalInputs: 0,
      totalLabor: 0,
      diagnostic: "",
      userId: (JSON.parse(localStorage.getItem('user'))).id,             //required
      productRepairId: -1,
      productRepairCode: "",    //required
      productRepairDescription: "",
      error: null,
    };
  }

  componentDidMount(){
    /*
    var current = new Date();
    this.setState({
      dateReceived: current.getDate(),
      dateStatus: current.getDate()
    });
    */
    console.log(this.state);
  }

  render() {
    return (
      <section className="mx-64">
        <form className="grid grid-cols-4 col-span-3 pt-10 mx-40" onSubmit={this.handleSubmit}>
          <MainTitle class="col-span-4 mb-5" text="Nuevo reporte." />
          <Label class="col-span-2" name="code" text="Código" />
          <Label class="col-span-2" name="date" text="Fecha de ingreso" />
          <Input
            class="pl-5 col-span-2 mr-8 mt-2"
            name="serialNumber"
            type="text"
            onChange={this.handleChange}
          />
          <Input
            class="pl-5 col-span-2 mt-2"
            name="dateReceived"
            value={this.state.dateReceived}
            type="date"
            onChange={this.handleChange}
          />
          
          <Label class="col-span-2" name="name" text="Código del dispositivo" />
          <Label class="col-span-2" name="name" text="Nombre del dispositivo" />
          <Input
            class="pl-5 col-span-2 mr-8 mt-2"
            name="productRepairCode"
            type="text"
            onChange={this.handleChange}
          />
          <Input
            class="pl-5 col-span-2 mt-2"
            name="productRepairDescription"
            type="text"
            onChange={this.handleChange}
          />          
          
          <Label class="pt-5 col-span-4" name="failure" text="Motivo de la reparación" />
          <textarea
            name="equipamentFailure"
            rows="4"
            cols="50"
            onChange={this.handleChange}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
          ></textarea>
          <Label class="pt-5 col-span-4" name="accesories" text="Accesorios Recibidos" />
          <textarea
            name="accesoriesReceived"
            rows="2"
            cols="50"
            onChange={this.handleChange}
            className="appearance-none py-2 px-4 rounded-lg border border-gray-600 placeholder-gray-500 text-gray-900 font-regular focus:outline-none focus:border-rojo pl-5 col-span-4 mt-2"
          ></textarea>
          <Label class="col-span-4 pt-5" name="diagnostico" text="Diagnostico" />
          <Input
            class="pl-5 col-span-4  mt-2"
            name="diagnostic"
            type="text"
            onChange={this.handleChange}
          />
          <Label class="col-span-2 pt-5" name="price" text="Coste" />
          <Label class="col-span-2 pt-5 mx-5" name="delivery" text="Estado del Dispositivo" />
          <Input
            class="col-span-2 mt-2"
            name="totalLabor"
            type="number"
            value={this.state.price}
            onChange={this.handleChange}
          />
          <select name="serviceStatus" onChange={this.handleChange}
            className="col-span-2 mx-5 px-5 mt-2 block appearance-none bg-blanco border border-negro hover:border-rojo rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option value="0">Recibido</option>
            <option value="1">En Reparación</option>
            <option value="2">Por Confirmar</option>
            <option value="3">Reparado</option>
            <option value="4">Retira sin Reparar</option>
          </select>
          <button
            type="submit"
            className="bg-verde hover:bg-green-500 text-blanco font-bold mt-10 py-2 px-4 mb-5 border border-green-600 rounded-lg col-span-4"
          >
            Crear reporte
          </button>
        </form>
      </section>
    );
  }

  handleChange = (event) => {
    if (event.target.name === "serviceStatus")
    {
      this.setState({serviceStatus: Number(event.target.value)});
      return;
    }
    if (event.target.name === "dateReceived")
    {
      this.setState({
        dateReceived: event.target.value,
        dateStatus: event.target.value
      });
      return;
    }

    const value = event.target.type === "number" ? Number(event.target.value) : event.target.value;
    this.setState({ [event.target.name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
    /*
    if (!(this.state.serialNumber && 
          this.state.observations &&
          this.state.equipamentFailure &&
          this.state.dateReceived &&
          this.state.serviceStatus &&
          this.state.productRepairCode &&
          this.state.productRepairDescription)) {
      return;
    }*/

    this.saveProductRepair();
    

    const data = {
      serialNumber: this.state.serialnumber, 
      observations: this.state.observations,
      accesoriesReceived: this.state.accesoriesReceived, 
      equipamentFailure: this.state.equipamentFailure, 
      dateReceived: this.state.dateReceived, 
      serviceStatus: this.state.serviceStatus,       //required
      dateStatus: this.state.dateStatus, 
      totalInputs: this.state.totalInputs, 
      totalLabor: this.state.totalLabor, 
      diagnostic: this.state.diagnostic, 
      userId: this.state.userId, 
      productRepairId: this.state.productRepairId
    }

    TechnicalServiceService.create(data).then(res =>{
      alert("Reporte cargado");
      const { from } = this.props.location.state || {
        from: { pathname: "/admin/reports" },
      };
      this.props.history.push(from);
    });
  }

  saveProductRepair(){
    const productRepair = {
      description: this.state.productRepairDescription,
      code: this.state.productRepairCode,
      brandId: 1,
      categoryId: 1 //hard code papa
    }
    ProductRepairService.create(productRepair);
    ProductRepairService.getAll().then(res=>{
      var _prod = res.data;
      var x = res.data.some(item => productRepair.description === item.description);
      this.setState({productRepairId: x.Id})
    })

    //----LOGS------------------------
    console.log(this.state);
  }
}
