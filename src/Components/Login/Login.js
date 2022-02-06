import React, { useState } from 'react';
import PropTypes from 'prop-types';

import "../../vendors/select2/select2.min.css";
import "../../vendors/select2-bootstrap-theme/select2-bootstrap.min.css";


async function loginUser(credentials) {

    return fetch('https://localhost:44358/api/v1/Auth/Token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'password': this.username,
        'userName': this.password
      },

    })
      .then(data => data.json())
   }


//Este es la funcion que llama el metodo loginUser
export default function Login({ setToken }) {
    const [username, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          username,
          password
        });
        setToken(token);
      }


    return(
        <div class="row w-100 mx-0">
          <div class="col-lg-4 mx-auto">
            <div class="auth-form-light text-left py-5 px-4 px-sm-5">
              <div class="brand-logo">
                <img src="../../images/logo.svg" alt="logo" />
              </div>
              <h4>Hola! vamos a empezar</h4>
              <h6 class="font-weight-light">Inciar sesi&oacute;n.</h6>
              <form class="pt-3" onSubmit={handleSubmit}>
                <div class="form-group">
                  <input type="text" onChange={e => setUserName(e.target.value)} class="form-control form-control-lg" id="username" placeholder="usuario" />
                </div>
                <div class="form-group">
                  <input type="password"  onChange={e => setPassword(e.target.value)} class="form-control form-control-lg" id="password" placeholder="contraseña" /> 
                </div>
                <div class="mt-3">
                  <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" href="../../index.html">Entrar</a>
                </div>
                <div class="my-2 d-flex justify-content-between align-items-center">
                  <div class="form-check">
                    <label class="form-check-label text-muted">
                      <input type="checkbox" class="form-check-input" />
                      mantener session
                    <i class="input-helper"></i></label>
                  </div>
                </div>
                <div class="row">
                    <div className="align-items-center">
                        <a href="#" class="auth-link text-black">Olvido la contrase&ntilde;na?</a>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
  )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }