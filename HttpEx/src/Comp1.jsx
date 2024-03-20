import { Component } from "react";
import Axios from "./Axios"
class Comp1 extends Component{

state={
    Users:[]
}

getData=()=>{
   
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((resp)=>{
            console.log(resp.data)
        })
        .catch((err)=>{
            console.log(err)
        })
   
}

  
render(){
    return(<>
    
    <button onClick={this.getData}>click here</button>
    
    </>)
}
}
export default Comp1