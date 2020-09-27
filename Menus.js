import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function Menus(){
	return(
		 <div>
      <ListGroup>
        <Link active tag="a" to="/home" action><h3>Home</h3></Link>
        <Link tag="a" to="/Addcources" action><h3>Add Cources</h3></Link>
        <Link tag="a" to="/view-cources" action><h3>View Cources</h3></Link>
        <Link tag="a" to="/About-us" action><h3>About us</h3></Link>
        <Link tag="a" to="/Contact" action><h3>Contact us</h3></Link>
        <Link tag="a" to="/delete" action><h3>Delete</h3></Link>
      </ListGroup>
      </div>

		);
}
export default Menus;
