import React from 'react';
import {Jumbotron} from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle,Container, CardSubtitle
} from 'reactstrap';


function Header(){
	return(
		<div>
		<Container>
		<Card>
		<CardBody className="bg-dark">
				<CardText>
				<h1 className = "text-center text-white">
				<i>Welcome in TECHNOLOGY Application</i>
				</h1>
				</CardText>
		</CardBody>
		</Card>
		</Container>
		</div> 
		);
}
export default Header;