import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';


//import Navegation from './Components/Navegation'
import CreateCampaign from './Components/CreateCampaign'
import CreateUser from './Components/CreateUser'
import BonusPayment from './Components/BonusPayment'
import SaleRecord from './Components/SaleRecord'
import SaleHistory from './Components/SaleHistory'
import MaintCampaign from './Components/MaintCampaign';
import { MaintUser } from './Components/MaintUser';
import MaintBonus from './Components/MaintBonus';
import MaintSaleR from './Components/MaintSaleR';
import Login from './Components/Login/Login';


function App() {
  const [token, setToken] = useState();

  if(!token) {
      return <Login setToken={setToken} />
  }

  return ( 
    <Router>
      
      
      <Routes>
      

          <Route path="/campaign" element={<CreateCampaign />} />
          <Route path="/EditCampaign" element={<MaintCampaign/>} />

          <Route path="/user" element={<CreateUser />} />
          <Route path="/MaintUser" element={<MaintUser />} />

          <Route path="/bonus" element={<BonusPayment />} />
          <Route path="/EditBonus" element={<MaintBonus/>}/>


          <Route path="/record" element={<SaleRecord/>}/>
          <Route path="/Editrecord" element={< MaintSaleR />} />

          <Route path="/history" element={<SaleHistory />} />

       

      </Routes>

    </Router>

  )
}

export default App;
