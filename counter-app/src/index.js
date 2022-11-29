import React from "react";
import ReactDOM from "react-dom"
import App from "./Component/App";
import store from "./Redux/store";
import { Provider } from "react-redux";
store.subscribe(()=>console.log(store.getState()))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
   <React.StrictMode>
    <Provider store={store}>
<App/>
</Provider>
   </React.StrictMode>
)