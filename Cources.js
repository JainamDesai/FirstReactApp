import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,Container
} from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
function Cources({cources}){
	return(
		<Container className="themed-container" fluid="md">
     <Card>
     <CardBody className="bg-dark">
     <CardTitle className="text-center">
     		<h3 className = "text-white">{cources.ctitle}</h3>
      </CardTitle>
        <CardText className = "text-center">
        		<h5 className = "text-white">{cources.cdesc}</h5>
        </CardText>
        <Container className="text-center">
        <Button color="danger ml-3">Delete</Button>
        <Button color="primary ml-3">Update</Button>
        </Container>
     </CardBody>
     </Card>
     </Container>
		);

}
export default Cources;