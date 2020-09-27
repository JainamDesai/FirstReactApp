import React,{Fragment,useState} from 'react';
import { Button,Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import {Row,Col} from 'reactstrap';
import {useEffect} from 'react';
import Menus from './Menus';
import {ToastContainer,toast} from "react-toastify";
import axios from 'axios';
const Addcources= () =>{
  useEffect(()=>{
    document.title = "AddCource";
  },[]);
  const [cources,setCources] = useState({});
  const hendleform = (e)=>{
e.preventDefault();
postDataToServer(cources);
  }
  const postDataToServer=(cources)=>{
 axios.post('http://localhost:8081/insert',cources).then(
(response)=>{
toast.success("your data saved Successfully",{
  position:"top-center",
});
},
(error)=>{
toast.error("Something wrong.........sorry");

})

  }
	return(
			<div>
      <ToastContainer/>
      <Container>
      <h1>Form of Cource Information</h1>
      <Form onSubmit={hendleform}>
       <FormGroup>
        <Label for="id">Cource id</Label>
        <Input type="number" name="id" id="id" placeholder="please enter courceid.........." onChange = {(e)=>{
          setCources({...cources,id:e.target.value})
        }} />
      </FormGroup>
       <FormGroup>
        <Label for="ctitle">Cource Title</Label>
        <Input type="text" name="ctitle" id="ctitle" onChange = {(e)=>{
          setCources({...cources,ctitle:e.target.value})}} placeholder="please enter title......" />
      </FormGroup>
      <FormGroup>
        <Label for="cdesc">Description</Label>
        <Input type="text" name="cdesc" id="cdesc" onChange = {(e)=>{
          setCources({...cources,cdesc:e.target.value})}}  placeholder="please enter description.........." />
      </FormGroup>
      <Button type = "submit" color="primary">Submit</Button>
       </Form>
      </Container> 
      </div>

		);


};
export default Addcources;