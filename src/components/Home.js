import React, { useState, useEffect} from 'react'
import styled from 'styled-components'
import axios from "axios"


const Header = styled.h1`
background: yellow
margin: 10px
`



export default (props) =>{
   

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("http://localhost:5000")
        .then(result => setData(result.data));
    }, []);
  

    return(
        <>
             <Header>The Phone Book</Header>
             <a href="/user" className="button">Add Phone Number!</a>
             

                    <div className="container">
                        <div className="row">
                            <div className="col">
                            Name
                            </div>
                            <div className="col">
                            Phone Number
                            </div>
                        </div>
                    </div>


                    <div className="container">
                        <div className="row">
                            <div className="col">
                           {data.map((item, index) => (
                               <div  key={item._id} index={index}>

                                   <a href={"/profile/" + item._id}>{item.name}</a> 

                                </div>
                           ))}
                            </div>
                            <div className="col">
                            {data.map((item, index) => (
                               <div  key={item._id} index={index}>{item.phone} 
                               </div>
                           ))}
                            </div>
                        </div>
                    </div> 
                    
                     
        </>
    )
}