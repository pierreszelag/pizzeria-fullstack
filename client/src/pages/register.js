import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Navbar, Form, FormControl, Nav } from 'react-bootstrap';
import axios from 'axios';
import Registerblock from '../components/registerblock';


const newUserInitialFormData = Object.freeze({
    email: "",
    password: "",
    firstname: "",
    lastname: "",
    adress: "",
    phone: ""
  });

export default function Register() {
    
    const [newUserFormData, updateNewUserFormData] = useState(newUserInitialFormData);
    const [clients, addClients] = useState([]);

    return(
        <Registerblock clients={clients} addClients={addClients} newUserFormData={newUserFormData} updateNewUserFormData={updateNewUserFormData} />
    );
  }
