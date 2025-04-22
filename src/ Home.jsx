import React, { use, useEffect, useState } from "react";
import Colors from "../Color"; // import Colors from './Colors';

import axios from "axios";


const Home=()=>{
    const [Data,setData] = useState({
        Company: '',
        Description: ''
    })
    const [colorsData, setColorsData] = useState([])
        //Getting color data from the website
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
        .then (res=>{
            //describing the company
            let companyName = "HPBMedia";
            let companyDesc = "We help CEO's build their personal brand";
            setData({Company:companyName,Description:companyDesc})
            setColorsData(res.data.data)

            console.log("Response from api: ", res);
            console.log("colors data: ", res.data.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        //Printing out company info 
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
        </>
    )
}
export default Home;

