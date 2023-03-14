import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import './style.css'
const composeEnhancers  =  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__   ||  compose;

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>
);
