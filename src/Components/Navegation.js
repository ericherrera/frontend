import React, { Component } from 'react'
import { Link,Routes } from 'react-router-dom'

export default class Navegation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid"> 
                <a className="navbar-brand" href="/">BonusPayment App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" >
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to ="/" >Home </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/campaign">campaign</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/EditCampaign"> crear campaign</Link>
                        </li>                    
                        <li className="nav-item">
                            <Link className="nav-link" to="/user">Usuario</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/bonus">Bonificacion</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/record">Reg. de ventas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/history">Historial de Venta</Link>
                        </li>
                    </ul>
                </div>
                </div>
            </nav>
        )
    }
}
