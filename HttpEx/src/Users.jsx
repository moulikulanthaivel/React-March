import React, { useState, useEffect } from "react";
import Axios from "./axios";

let Users = () => {
  let [users, setUsers] = useState([]);
  let [flag, setFlag] = useState(false);


useEffect(() => {
  Axios.get("https://jsonplaceholder.typicode.com/users")
    .then((resp) => {
      setUsers(resp.data)
    })
    .catch((err) => {
      setFlag(true)
    })
})

let DisplayUser =(name)=>{
alert(`Hello ${name} , good afternoon`)
}

return <div>
    <h2>User</h2>

    <pre>{JSON.stringify(users)} </pre>

    <div className="container">
      <div className="row">
        <div className="col-md-8">
          {
          Users.length > 0 ? 
            <>
              <table>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  users.map((user) => {
                    return <tr key={user.id} onClick={DisplayUser.bind(null,user.name)}>
                        <td>{user.id} </td>
                        <td>{user.name} </td>
                        <td>{user.email} </td>
                    </tr>
                  })
                }
                </tbody>
              </table>
            </>
          : 
            <h3>NO DATA</h3>
           
          
          
          }
        
    }
      </div>
 
    </div>
  </div>
export default Users;
