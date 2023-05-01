import React from 'react';
import ReactDOM from 'react-dom';
import './components/Sami/index.css';
import App from './components/Sami/apps/App';
import Appmembre from './components/Sami/apps/Appmembre';
import Appadmin from './components/Sami/apps/Appadmin';
import Login from './components/Aniss/Login'


fetch('http://localhost:4000/getrole')
.then(response => response.json()) // parse the response as JSON
.then(data => {
  const userRole = data.userrole; // access the userrole property of the response data
    let componentToRender;

  	console.log()
    switch (userRole) {
      case "BASIC":
        componentToRender = <Appmembre />;
        break;
      case "ADMIN":
        componentToRender = <Appadmin />;
        break;
      default:
        componentToRender = <App />;
    }

    ReactDOM.render(
      <React.StrictMode>
        {componentToRender}
      </React.StrictMode>,
      document.getElementById('root')
    );
 
 
})

.catch(error => {
console.error(error);
});


 

