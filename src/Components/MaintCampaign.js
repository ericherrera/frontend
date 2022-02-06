import React, { Component } from 'react';

export default class MaintCampaign extends Component {

    render() {
        return (
            <div class="col-lg-12 stretch-card">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Campañas creadas</h2>
                <p class="card-description">
                </p>
                <div class="table-responsive pt-3">
                  <table class="table table-bordered">
                    <thead>
                      <tr>
                        <th>
                            ID
                        </th>
                        <th>
                        Nombre de la Campana
                        </th>
                        <th>
                            Fecha de Vencimiento
                        </th>
                        <th>
                            Monto
                        </th>
                        <th>
                        Monto Minimo
                        </th>
                        <th>
                        Tasa Minima
                        </th>
                        <th>
                        Tasa Maxima
                        </th>
                        <th>
                        opciones
                        </th>

                      </tr>
                    </thead>
                    <tbody>
                      <tr class="table-info">
                        <td>
                          1
                        </td>
                        <td>
                          Prestamos hogareño
                        </td>
                        <td>
                        May 15, 2015
                        </td>
                        <td>
                         $5,000,000
                        </td>
                        <td>
                          $100,000
                        </td>
                        <td>
                          10%
                        </td>
                        <td>
                          18%
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
