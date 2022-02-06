import React, { Component } from 'react'

export default class SaleRecord extends Component {
    render() {
        return (
            <div class="main-panel">
                <div class="content-wrapper">
                    <div class="row">
                        <div class="col-md-12 grid-margin stretch-card">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Registo de Venta</h4>
                                    <form class="forms-sample">
                                        <div class="form-group">
                                            <label for="exampleInputName1">ID VENTA</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="IdV" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">Codigo de Referencia</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="CodigoR" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">Tasa de Venta</label>
                                            <input type="text" class="form-control" id="exampleInputEmail3" placeholder="TasaV" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">Monto de Venta</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="MontoV" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">Tiempo de Venta</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="TiempoV" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">ID campana</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="IdC" required />
                                        </div>
                                        <div class="form-group">
                                            <label for="exampleInputName1">ID Usuario</label>
                                            <input type="text" class="form-control" id="exampleInputName1" placeholder="IdU" required />
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
