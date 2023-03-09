import React,{useEffect,useState} from "react";
import {List,Datagrid,TextField,DateField,EditButton,DeleteButton} from 'react-admin'



function bikedata(props){
   <List {...props}>
    <Datagrid>
        <TextField source="id"></TextField>
        <TextField source="name"></TextField>
        <TextField source="image"></TextField>
        <TextField source="price"></TextField>
        <TextField source="price2"></TextField>
        
        <EditButton basePath='/bikes'>
        </EditButton>
        <DeleteButton basePath='/bikes'></DeleteButton>
    </Datagrid>
   </List>
 

}

export default bikedata;