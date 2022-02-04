import React, {  useEffect, useState } from "react";
import {Link,useHistory,useParams} from 'react-router-dom';
import "./AddEdit.css"
import fireDb from "../firebase";
import axios from 'axios';
import {toast} from "react-toastify";


const initialState = {
    name: "",
    email: "" ,
    contact: "",
}


const AddEdit= () => {
    const [state,setState] = useState(initialState);
    const [data,setData] = useState({});

    const { name, email, contact} = state;

    const history=useHistory();

    const {id} = useParams();

    useEffect(() => {
        fireDb.child("contacts").on("value",(snapshot) => {
            if(snapshot.val()!==null){
                setData({...snapshot.val()});
            }else{
                setData({});
            }
        });
        return () => {
            setData({});
        };
    },[id]);

    useEffect(() => {
        if(id) {
            setState({...data[id]})
        } else{
            setState({...initialState})
        }
        return () => {
            setState({...initialState})
        };
    },[id,data]);

    const handleInputChange= (e) => {
        const {name,value} = e.target;
        setState({...state,[name] : value });
    };

    const handleSubmit= (e) => {
        e.preventDefault();
        if(!name || !email || !contact) {
            toast.error ("Please insert value into each input field");
         }
         else {
             if(!id){
                fireDb.child("contacts").push( state, (err) => {
                if(err){
                    toast.error("error");
                } else{
                    toast.success("Contact Added Successfully ");
                }
                });    
             }else{
                 fireDb.child(`contacts/${id}`).set(state, (err) => {
                     if(err) {
                         toast.error(err);
                     }else {
                         toast.success("Contact Updated Sucessfully ");
                     }
                 });
             }
            setTimeout(() => history.push("/"), 500);
            }
    }; 

    return (
        <div style={{marginTop: "100px" }}>
            <h2> Contact </h2>
            <form 
             style={{
                margin: "auto", 
                padding: "15px",
                maxWidth: "400px",
                alignContact: "center",
                }}
                onSubmit={handleSubmit}
            >
                <label htmlFor="name">Name</label>
                <input 
                type="text"
                id="name"
                name="name"
                placeholder=" Your Name ..."
                value={name || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="email">Email</label>
                <input 
                type="email"
                id="email"
                name="email"
                placeholder="Your Email ..."
                value={email || ""}
                onChange={handleInputChange}
                />

                <label htmlFor="contact" > Contact</label>
                <input 
                type="number"
                id="contact"
                name="contact"
                placeholder="Your contact No ..."
                value={contact || ""}
                onChange={handleInputChange}
                />
                <input type="submit" value={id? "Update" : "Save" } />
            </form>
        </div>
    );
}

export default AddEdit;