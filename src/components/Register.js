import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #dbdbdb;
  color: darkblue;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  padding: 5px 9px;
  text-transform: capitalize;
  font-size: 14px;
  margin-left: 20px;
`;
const Input = styled.input`
  font-size: 16px;
  border: solid 1px #dbdbdb;
  border-radius: 3px;
  color: #262626;
  padding: 7px 33px;
  border-radius: 3px;
  color: #999;
  cursor: text;
  font-size: 14px;
  font-weight: 300;
  text-align: center;
  background: #fafafa;

  &:active,
  &:focus {
    text-align: left;
  }
`;




export default (props) =>{

   

    const handleSubmit = async (e) =>{
        e.preventDefault()
        await fetch("http://localhost:5000/user",{
        method: "POST", 
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify({"name": name, "email": email, "password": password, "phone": phone})
        })
        await setToHome(true)
        

    }
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [phone, setPhone] = useState()
    const [toHome, setToHome] = useState(false)

    return(
         <>
            {toHome ? <Redirect to= '/'/> : null}

                <form onSubmit={handleSubmit}>
                    <Input type= "text" placeholder= "Name"  onChange= {e => setName( e.target.value)} required/>
                    <Input type= "email" placeholder= "Email"  onChange= {e => setEmail( e.target.value)} required/>
                    <Input type= "password" placeholder="Password"  minLength="8" maxLength="15" onChange= {e => setPassword( e.target.value)} required />
                    <Input type= "tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  maxLength="12" placeholder ="Phone Number" onChange= {e => setPhone( e.target.value)} required />
                    <Button>Submit</Button>
                </form>
        </>
    )
}