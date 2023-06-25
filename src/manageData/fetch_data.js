const getApi= async (baseUrl)=>{
    let response = await fetch(baseUrl)
    return await response.json();
}


const postData=async (baseUrl,endPoint,data)=>{
    let response=await fetch(baseUrl+endPoint,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return response.json()
}

const EditData=async (baseUrl,endPoint,id)=>{
    let response=await fetch(baseUrl+endPoint+id,{
        method:"PUT",
        
    })
}
export {getApi,postData}

