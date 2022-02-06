import React, { Component } from 'react';



export class MaintUser extends Component {
    render() {
        return (
            <div class="col-lg-12 stretch-card">
                <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">Usuarios Creado</h2>
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
                                            Nombre
                                        </th>
                                        <th>
                                            Codigo Empleado
                                        </th>
                                        <th>
                                            Estado
                                        </th>
                                        <th>
                                            Fecha de Ingreso
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
                                            Samuel de la Nuez
                                        </td>
                                        <td>
                                            AB1015
                                        </td>
                                        <td>
                                        <label class="badge badge-success">Completed</label>  
                                        <label class="badge badge-danger"> NO ACTIVO </label> 
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


