import React, { Component } from 'react'
import axios from 'axios'

export default class CreateCampaign extends Component {

  state = {
    users: [],
    username: ' '
  }


  async componentDidMount() {
    /*pedir peticiones pedir los datos del servidor*/
    /*const res = await axios.get('https://localhost:44358/swagger/index.html');
    this.setState({users: res.data});*/
    /*console.log(this.state.users);*/
  }

  OnChangeUsername = (e) => {
    console.log(e.target.value);
  }
  render() {

    return (
      <div class="main-panel">
        <div class="content-wrapper">
          <div class="row">
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Crear Campana</h4>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">ID</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Id" required/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Nombre de la Campana</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="NombreCampana" required/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Fecha de Vencimiento</label>
                      <input type="date" class="form-control" id="exampleInputEmail3" placeholder="FechaVencimiento" required/>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Monto</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Monto"required />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Monto Minimo</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="MontoM"required />
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">Tasa Minima</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="TasaMin" required/>
                    </div>

                    <div class="form-group">
                      <label for="exampleInputName1">Tasa Maxima</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="MontoMax"required />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6 grid-margin stretch-card">
              <div class="card">
                <div class="card-body">
                <br/>
                <br/>
                  <form class="forms-sample">
                    <div class="form-group">
                      <label for="exampleInputName1">Tiempo Minimo</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="TiempoMin"required />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputName1">Tiempo Maximo</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="TiempoMax" required />
                    </div>

                    <div class="form-group">
                      <label for="exampleInputName1">Cuenta Bancaria Debital</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="Cuenta Bancaria" required />
                    </div>
                    <div class="form-group">
                      <label for="exampleSelectGender">Estado</label>
                      <select class="form-control" id="exampleSelectGender">
                        <option>Activo</option>
                        <option>NO Activo</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleInputName1">ID Usuario</label>
                      <input type="text" class="form-control" id="exampleInputName1" placeholder="IdU" required/>
                    </div>
                    <button type="submit" class="btn btn-primary mr-2">Submit</button>
                    <button class="btn btn-light">Cancel</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
