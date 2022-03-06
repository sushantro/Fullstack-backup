import React, { useState } from "react";
import { useEffect } from "react";
import Emp from "./Emp"
import {NavLink} from "react-router-dom"



import axios from 'axios';

const Form = () => {
    const [lisof, setlistof] = useState([])
    useEffect(() => {

        axios.get("http://localhost:8000/post").then((res) => {
            // console.log(res.data);
            setlistof(res.data)

        })

    }, [])
    return (
        <>
            {
                lisof.map((val, key) => {
                    return (
                        <div>
                            <li>{val.EMPID }</li>
                            <li>{val.USERNAME}</li>
                            <li>{val.Name}</li>
                            <li>{val.id}</li>
                            {/* <button>click me</button> */}
                            <NavLink to="/Emp">About us</NavLink>
                           


                            

                        </div>
                        





                    )


                })
            }



        </>
    )
}

export default Form;