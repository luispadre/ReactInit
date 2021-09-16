import ReactDOM from "react-dom";
import React from 'react'

function App() {
    return (<React.Fragment>
        Hola Mundo
    </React.Fragment>);
}

const app = document.getElementById("react_root");
if (app) {
    ReactDOM.render(<App />, app);
}


