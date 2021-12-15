import React from 'react';//ele deve ser importado sempre que usamos jsx
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Pai from './componentes/Pai'
import Filho from './componentes/Filho'

ReactDOM.render(
  <div>
    <Pai nome="Paulo" sobrenome="Silva">
      <Filho nome="Pedro"/>
      <Filho nome="Paulo" sobrenome="Silva"/>
      <Filho nome="Carla" sobrenome="Silva"/>
    </Pai>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
