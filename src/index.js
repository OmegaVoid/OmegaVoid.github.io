import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(
        <App />,
  document.getElementById('root')
);

const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/@widgetbot/crate@3'; // URL for the third-party library being loaded.
script.type = 'text/javascript';
script.async = true;
script.innerHTML= "new Crate({\n" +
    "    server: '728242919223459911', // OmegaVoid\n" +
    "    channel: '728242920041349227' // #general\n" +
    "  })"
document.body.appendChild(script);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
