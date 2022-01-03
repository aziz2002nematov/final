import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const pass = document.querySelector('#pass')
const confirm_pass = document.querySelector('#confirm-pass')
const msg = document.querySelector('p1')
const btn = document.querySelector('button')
btn.addEventListener('click', (e) => {
    if (pass.value != confirm_pass.value) {
        e.preventDefault();
        msg.style.display = "block"
    }else{
        alert('user registered sucessfully')
    }

})
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
        // lets do some password validation
     
