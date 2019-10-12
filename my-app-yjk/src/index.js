import React from 'react';
import ReactDOM from 'react-dom';
import initStore from "./store"
import { Provider } from "react-redux"
import App from "./router/app"
import "./static/icon/iconfont.css"
const store = initStore();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));


