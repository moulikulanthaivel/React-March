import { Component, Fragment } from "react";

class State1 extends Component{

state={
    product:{
        product_Name:"i phone 15",
        product_Img:'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT-EDSBSl62BH_CBFD98kz6RfnEw_MemPjzLnoWK_qlDDFVXdIoLwSpHUyGpM8b_HewkwWWVc2EakASDGrsD7O-1o6YEOVGMqn2eXTf-IBOmShhXrmr41y7VKCvdncFs-DsrtXGjg&usqp=CAc',
        qty:1,
        product_price:66999
            }
}
incrHandler = ()=>{
    this.setState({
        product:{...this.state.product , qty:this.state.product.qty +1}})
}

decrHandler = ()=>{
        this.setState({
        product:{...this.state.product , qty:this.state.product.qty -1}})
}
    render(){
        return(
            <Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10">
                            <table className="table">
                                <thead className="bg-warning">
                                    <th>Product Name</th>
                                    <th>Product Image</th>
                                    <th>Product Qty</th>
                                    <th>Product Price</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{this.state.product.product_Name} </td>

                                        <td><img src={this.state.product.product_Img} height={"100px"}/> </td>

                                        <td> <i className="fa fa-minus-circle" onClick={this.decrHandler}>-</i> {this.state.product.qty}
                                         <i className="fa fa-plus-circle" onClick={this.incrHandler}>+</i></td>


                                        <td>{this.state.product.product_price * this.state.product.qty} </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    };
}
export default State1