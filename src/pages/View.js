import React, { useEffect, useState } from "react";
import {Link,useHistory,useParams} from 'react-router-dom';
import fireDb from "../firebase";
import "./View.css"
import axios from 'axios';
import {toast} from "react-toastify";

const View= () => {
    const [user,setUser] = useState({});

    const {id} = useParams();

    useEffect(() => {
        fireDb.child(`contacts/${id}`)
        .get()
        .then((snapshot) => {
            if(snapshot.exists()){
                setUser({...snapshot.val()});
            }else{
                setUser({});
            }
        })
    },[id]);

    console.log("user" , user);

    return (
        <div style={{marginTop:"100px"}}>
            <div className="card">
                <div className="card-header">
                    <p> User Contact Detail </p>
                </div>
                <div className="container">
                    <strong> ID: </strong>
                    <span>{id}</span>
                    <br/>
                    <br/>
                    <strong> Name: </strong>
                    <span>{user.name}</span>
                    <br/>
                    <br/>
                    <strong> Email: </strong>
                    <span>{user.email}</span>
                    <br/>
                    <br/>
                    <strong> Contact: </strong>
                    <span>{user.contact}</span>
                    <br/>
                    <br/>
                    <Link to="/">
                        <button className="btn btn-back">Go Back </button>
                    </Link>
                </div>
            </div>
           
        </div>
    )
}

export default View;