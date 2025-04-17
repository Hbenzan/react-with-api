import React, { use, useEffect, useState } from "react";
import Colors from "../Color";
import axios from "axios";


const Home=()=>{
    const [Data,setData] = useState({
        Company: '',
        Description: ''
    })
    const [colorsData, setColorsData] = useState([])
    useEffect(()=>{
        axios.get('https://reqres.in/api/unknown')
        .then (res=>{
            let companyName = "HPBMedia";
            let companyDesc = "We help CEO's build their personal brand";

            setData({Company:companyName,Description:companyDesc})
            setColorsData(res.data.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    return (
        <>
        <h1>{Data.Company}</h1>
        <p>{Data.Description}</p>
        <Colors data={colorsData}/>
        </>
    )
}
export default Home;

