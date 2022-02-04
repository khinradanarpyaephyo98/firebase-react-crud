import React from "react";
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from "./pages/Home";
import AddEdit from "./pages/AddEdit";
import View from "./pages/View";
import About from "./pages/About";
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Header from "./components/Header";


function App(){
  return (
       <BrowserRouter> 
         <div className="App">
         <Header/>
         <ToastContainer position='top-center'/>
           <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/add" component={AddEdit}/>
              <Route exact path="/update/:id" component={AddEdit}/>
              <Route exact path="/view/:id" component={View}/>
              <Route exact path="/about" component={About}/>
           </Switch>
         </div>
        </BrowserRouter>
  )
}


export default App;