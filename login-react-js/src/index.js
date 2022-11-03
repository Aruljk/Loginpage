import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from './Login/Login';
import Home from './Home/Home';
import Task from './TASK/Task';
import { BrowserRouter,Routes,Route,Navigate } from 'react-router-dom';

function RoutesComponent(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="home" element={<Home/>}></Route>
            <Route path="task" element={<Task/>}></Route>
           {/* <Route path="*" element={<Navigate to="/"/>}></Route> */}
        </Routes>
        
        </BrowserRouter>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
             <RoutesComponent/>
    </React.StrictMode>

);

reportWebVitals();
