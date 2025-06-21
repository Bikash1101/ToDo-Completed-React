// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import "./index.css"
import { ToastContainer } from 'react-toastify'
import Wrapper from './Wrapper.jsx'
// import { x , y } from "./App.jsx";

// console.log(x);
// console.log(y);

createRoot(document.getElementById('root')).render(
<Wrapper>
    <App />
        <ToastContainer position='top-center'/>
</Wrapper>
)


    