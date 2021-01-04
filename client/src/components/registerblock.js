import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    formblock: {
      width: "40vw",
      marginLeft: "30vw",
      marginTop: "10vh",
      textAlign: "left"
    }});


async function makePostRequest(url, newFirstname, newLastname, newEmail, newPassword, newPhone, newAdress) {

    let res = await axios.post(url, {
        firstname: newFirstname,
        lastname: newLastname,
        email: newEmail,
        password: newPassword,
        phone: newPhone,
        adress: newAdress
    });
    
    return res;
    
}

function Registerblock({clients, addClients, newUserFormData, updateNewUserFormData}) {
    const classes = useStyles();


    const handleChange = (e) => {
        updateNewUserFormData({
          ...newUserFormData,
          [e.target.name]: e.target.value.trim()
        });
      };
    
    const handleSubmit = (e) => {
        addClients([
            ...clients,
            {firstname:newUserFormData.firstname, lastname: newUserFormData.lastname, email: newUserFormData.email, password: newUserFormData.password, phone: newUserFormData.phone, adress: newUserFormData.adress, id: Math.ceil(Math.random() * 10000)}
        ])

        makePostRequest('http://localhost:3001/api/v1/client', newUserFormData.firstname, newUserFormData.lastname, newUserFormData.email, newUserFormData.password, newUserFormData.phone, newUserFormData.adress)
    };

    return (
        <form className={classes.formblock}>
            <div class="form-group">
                <label>First name</label>
                <input type="text" class="form-control" placeholder="First name" id="firstname" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Last name</label>
                <input type="text" class="form-control" placeholder="Last name" id="lastname" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Email address</label>
                <input type="text" class="form-control" placeholder="Email" id="email" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Phone number</label>
                <input type="text" class="form-control" placeholder="0123456789" id="phone" onChange={handleChange}></input>
            </div>

            <div class="form-group">
                <label>Adress</label>
                <input type="text" class="form-control" placeholder="Full adress" id="adress" onChange={handleChange}></input>
            </div>
            
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Register</button>
        </form>
    );
  }


  export default Registerblock;