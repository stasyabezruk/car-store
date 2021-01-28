import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./app/store";
import App from "./app/App";

const store = configureStore()

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root"));