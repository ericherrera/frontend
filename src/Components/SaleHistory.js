import React, { Component } from 'react'

export default class SaleHistory extends Component {
    render() {
        return (
            <div class="col-lg-12 stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Historial de Venta</h2>
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
                                            ID Campaña
                                        </th>
                                        <th>
                                            ID Usuario
                                        </th>
                                        <th>
                                            Monto
                                        </th>
                                        <th>
                                             Fecha de pago
                                        </th>



                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="table-success">
                                        <td>
                                            1
                                        </td>
                                        <td>
                                            3
                                        </td>
                                        <td>
                                            5
                                        </td>
                                        <td>
                                            150,000
                                        </td>
                                        <td>
                                            12
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
