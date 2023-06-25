import React, { useEffect, useState } from "react"
import { getApi } from "../manageData/fetch_data"
import { baseUrl } from "../manageData/config"
import Table from "./Table"


const Bind=()=>{
    const [alldata,setAllData]=useState([])

    useEffect(()=>{
        getApi('https://dummyjson.com/users').then(res=>setAllData(res[Object.keys(res)[0]]))
    },[])
    return(
        <>
        <Table alldata={alldata}/>
        </>
    );
}
 export {Bind}