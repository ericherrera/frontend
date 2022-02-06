import React, { Component } from 'react';

export default class MaintSaleR extends Component {
  render() {
    return (
        <div class="col-lg-12 stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Registros de ventas Creado</h2>
                        <p class="card-description">
                        </p>
                        <div class="table-responsive pt-3">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            ID Venta
                                        </th>
                                        <th>
                                            Codigo Referencia
                                        </th>
                                        <th>
                                            Tasa de Venta
                                        </th>
                                        <th>
                                            Monto de Venta
                                        </th>
                                        <th>
                                        Tiempo de Venta (Meses)
                                        </th>
                                        <th>
                                            ID Campaña
                                        </th>
                                        <th>
                                            ID Usuario
                                        </th>
                                        <th>
                                            opciones
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-success">
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1324515461
                                        </td>
                                        <td>
                                            18%
                                        </td>
                                        <td>
                                            150,000
                                        </td>
                                        <td>
                                            12
                                        </td>
                                        <td>
                                        1
                                        </td>
                                        <td>
                                        1
                                        </td>
                                        <td>
                                            <button className="btn btn-success"/* onClick={(id) => this.handleEdit(campaign.id)}*/>Edit</button>&nbsp;
                                            <button className="btn btn-danger" /*onClick={(id) => this.handleDelete(campaign.id)}*/>Delete</button>&nbsp;
                                        </td>                                       
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    )
  }
}
