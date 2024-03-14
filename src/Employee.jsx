import { Component, Fragment } from "react";
import Employees from "./Data"

class Employee extends Component{

    constructor(props){
        super(props)
        this.state = {
            Employees:Employees
        }
    }

    displayAlert = (name)=>{
        alert(`HI ${name}, GOOD MORNING`)
    }


render(){
    return(
       <div className="container">
        <div className="row">
            <div className="col-8">
                <div className="table table-stripped">
                    <thead>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </thead>
                    <tbody>
                        {
                            this.state.Employees.map((emp)=>{
                                return <tr key={emp.id} onClick={this.displayAlert.bind(this,emp.name)} >
                                <td>{emp.id} </td>
                                <td>{emp.name} </td>
                                <td>{emp.email} </td>
                                <td>{emp.gender} </td>
                                
                                </tr>
                            })
                          
                        }
                    </tbody>
                </div>
            </div>
        </div>
       </div>
    )
}

}
export default Employee