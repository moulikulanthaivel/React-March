import React,{ useEffect, useState } from "react"
// import React from "react";
import Axios from "axios"
let Employee = ()=>{

    let [Emp,setEmp]=useState([]);
    let [flag,setFlag]=useState(false);

    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((resp)=>{setEmp(resp.data)})
        .catch((err)=>{console.log("NO DATA");})
    })
let DisplayData=(name)=>{
 alert (`Name ${name} good afternoon`)
}
    return <div>
<h1>EMPLOYEE</h1>
        <pre>{JSON.stringify(Emp)} </pre>
        {
            Emp.length>0 ? <><table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                </tr>
                <tbody>
                    {
                        Emp.map((Emp)=>{
                     return    <tr key={Emp.id} onClick={DisplayData.bind(null,Emp.name)}>
                            <td>{Emp.id} </td>
                            <td>{Emp.name} </td>
                            <td>{Emp.email} </td>
                         </tr>
                        })
                    }
                </tbody>
                
                </table></> : <>NO DATA</>
        }
    </div>
}
export default Employee