import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "reactstrap";
import {ToastContainer,toast} from "react-toastify";
import Home from './components/Home';
import Header from './components/Header';
import Cources from './components/Cources';
import Allcources from './components/Allcources';
import Addcources from './components/Addcources';
import Menus from './components/Menus';
import Delete from './components/Delete';
import {Row,Col,Container} from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {

  return (
    <div>
    <Header></Header>
    <Router>
     <Container>
          <Row>
          <Col md={4}><h1><Menus></Menus></h1></Col>
          <Col md={8}>
          	<Route path="/home" component ={Home} exact/>
          	<Route path="/Addcources" component ={Addcources} exact/>
          	<Route path="/view-cources" component ={Allcources} exact/>
          	<Route path="/About-us" component ="About"/>
          	<Route path="/Contact" component ="Contact"/>
            <Route path="/delete" component ={Delete}/>
          </Col>
          </Row>
        </Container>
        </Router>
    </div>
  );
}

export default App;
