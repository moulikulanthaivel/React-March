import { Component, Fragment } from "react";
import Data from "./Data";

class Employee extends Component {
    constructor(props){
        super(props)
        this.state={
            Data:Data
        }
    }
    DisplayAlert=(name)=>{
  alert(`Hi ${name},GOOD MORNING `)
    }

  render() {
    return <Fragment>
<div className="container">
    <div className="row">
        <div className="col-4">
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>GENDER</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.Data.map((emp)=>{
                            return <tr key={emp.id} onClick={this.DisplayAlert.bind(this,emp.name)} >
                                <td>{emp.id} </td>
                                <td>{emp.name} </td>
                                <td>{emp.email} </td>
                                <td>{emp.gender} </td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
    </Fragment>;
  }
}
export default Employee;
