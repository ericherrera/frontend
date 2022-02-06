import React, { Component } from 'react'

export default class CreateUser extends Component {

    state = {
        users: [],
        usersSelected: '',

    }
    onSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return (
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">CREAR USUARIO</h4>
                        <form class="form-sample">
                            <p class="card-description">
                                BONUS PAYMENT
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">ID</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="ID"  required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Codigo Empleado</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Codigo" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Nombre</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Nombre" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Contrasena</label>
                                        <div class="col-sm-9">
                                            <input type="password" class="form-control" placeholder="Contrasena" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Cuenta Bancaria</label>
                                        <div class="col-sm-9">
                                            <input class="form-control" placeholder="CuentaBancaria" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">ID TIPO</label>
                                        <div class="col-sm-9">
                                            <input class="form-control" placeholder="IDTIPO" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Estado</label>
                                        <div class="col-sm-9">
                                            <select class="form-control" id="exampleSelectGender">
                                                <option>Activo</option>
                                                <option>NO Activo</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Fecha de Ingreso</label>
                                        <div class="col-sm-9">
                                            <input type="date" class="form-control" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary mr-2">Submit</button>
                            <button class="btn btn-light">Cancel</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
