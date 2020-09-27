import  {useState,useEffect} from 'react';
import React from 'react';
import {ToastContainer,toast} from "react-toastify";
import axios from 'axios';
import { Button,Container, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
const Delete = ()=>{
const [cources,setCources] = useState({});
const hendleform = (e)=>{
e.preventDefault();
deleteDatafromServer(cources);
}
const deleteDatafromServer = (cources)=>{
axios.delete('http://localhost:8081/deleteCources/3').then(
(response)=>{
toast.success("your data deleted successfully..........");
},
(error)=>{
	toast.error("something wrong......please check");
})
}
	return(
		<div>
		<ToastContainer/>
        <Form onSubmit={hendleform}>
         <FormGroup>
        <Label for="id">Cource id</Label>
        <Input type="number" name="id" id="id" placeholder="please enter courceid.........." onChange = {(e)=>{
         setCources({...cources,id:e.target.value})}}/>
        </FormGroup>
        <Button type="submit">Delete data</Button>
        </Form>
        </div>
        );
}
export default Delete;
