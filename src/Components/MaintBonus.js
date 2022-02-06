import React, { Component } from 'react';

export default class MaintBonus extends Component {
  render() {
    return (
        <div class="col-lg-12 stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">PROCESO DE BONIFICAICONES</h2>
                        <p class="card-description">
                            Todas las bonificaciones que se han registrado
                        </p>
                        <div class="table-responsive pt-3">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                        <th>
                                            Monto A pagar
                                        </th>
                                        <th>
                                            Codigo de Transferencia
                                        </th>
                                        <th>
                                            ID campaña
                                        </th>
                                        <th>
                                            ID Usuario
                                        </th>
                                        <th>
                                            Fecha de pago
                                        </th>
                                        <th>
                                            opciones
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-danger">
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            Samuel de la Nuez
                                        </td>
                                        <td>
                                            122315531548
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            1
                                        </td>
                                        <td>
                                        May 15, 2015
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
