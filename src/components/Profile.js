import React, { useState, useEffect } from 'react'
import axios from "axios"
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Button = styled.div`
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
  hover: transparent
`;
const A = styled.a`

`

export default (props) => {
    const userId = props.match.params.id
    const deleteHandler = async (e) => {
        e.preventDefault()
        await fetch (`http://localhost:5000/user/${userId}`,{
            method: "DELETE"
        
    })
    await setToHome(true)
    }

    const [data, setData] = useState([]);
    const [toHome, setToHome] = useState(false)

    useEffect(() => {
      axios
        .get(`http://localhost:5000/profile/${userId}`)
        .then(result => setData([result.data]));
    }, []);
  
  console.log(data)
    return( 
      
        <>
        {toHome ? <Redirect to= '/'/> : null}
       
        <a href ="/">Home</a>
        <div className="container">
    <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-6">
            <div className="well well-sm">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <img src="http://placehold.it/380x500" alt="" className="img-rounded img-responsive" />
                    </div>
                    <div className="col-sm-6 col-md-8">
                        <h4>
                        {data.map((item, index) => (
                               <div  key={item._id} index={index}>{item.name}</div>
                           ))}</h4>
                        
                       
                            <i className="glyphicon glyphicon-envelope"></i> {data.map((item, index) => (
                               <div  key={item._id} index={index}>{item.email} </div>
                           ))}
                            <br />
                            <i className="glyphicon glyphicon-globe"></i> {data.map((item, index) => (
                               <div  key={item._id} index={index}>{item.phone} </div>
                           ))}
                            <br />
                            {data.map((item,index) => (
                                <Button><A href={"/update/"+ item._id}>Edit</A></Button>
                            ))}
                            <br />
                            <form>
                                <Button type= "submit" onClick= {deleteHandler}>Delete</Button>
                            </form>
                            
                            
                        
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</>
    )
}