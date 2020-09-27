import React from 'react';
import {useEffect} from 'react';
import {Jumbotron,Container,Button} from "reactstrap";

const Home = ()=>{

	useEffect(()=>{
		document.title = "Home";
	},[]);
	return(
		<div>
        <Jumbotron className = "bg-info my-8" style={{width:"730px"}}>
		<h1 className = "text-center text-white">This is Home Page</h1>
		 <p className="text-center">Welcome in Tech World</p>
	 
		</Jumbotron> 
		</div> 

		);
}
export default Home;