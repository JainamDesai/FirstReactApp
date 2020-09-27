import React from 'react';
import Cources from './Cources';
import  {useState,useEffect} from 'react';
import base_url from './baseUrl';
import {ToastContainer,toast} from "react-toastify";
import axios from 'axios';

const Allcources = ()=>{
	useEffect(()=>{
		document.title = "Allcources";
		getAllCources();
	},[]);

const getAllCources = ()=>{
axios.get('http://localhost:8081/getcources').then(
(response)=>{
toast.success("Your cource loaded...please wait",{
position:"top-center",
});
setCources(response.data);
},
(error)=>{
	toast.error("Something wrong.........please check",{
position:"top-center",
});
}

	);

};	


const [cources,setCources] = useState([]);
return(

	<div>
	<ToastContainer/>
		<h1>All cources</h1>
		{cources.length>0?cources.map((item)=> <Cources key={item.id} cources={item}/>)
		:"No cources"}
	</div>
	);
};
export default Allcources;
