import React, { Component } from 'react'

export default class BonusPayment extends Component {
    render() {
        return (
            <div class="col-12 grid-margin">
                <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">PROCESAMIENTO DE BONIFICACION</h4>
                        <form class="form-sample">
                            <p class="card-description">
                                BONUS PAYMENT
                            </p>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Monto a Pagar</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="Monto a Pagar" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Cuenta Debito</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="CuentaD" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Cuenta Credito</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="CuentaC"  required/>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Codigo de Transferencia</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="CodigoT" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">Fecha de Pago</label>
                                        <div class="col-sm-9">
                                            <input type= "date"class="form-control" placeholder="FechaP" required />
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">ID campana</label>
                                        <div class="col-sm-9">
                                            <input class="form-control" placeholder="IdC" required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group row">
                                        <label class="col-sm-3 col-form-label">ID Usuario</label>
                                        <div class="col-sm-9">
                                            <input type="text" class="form-control" placeholder="IdU" required />
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
