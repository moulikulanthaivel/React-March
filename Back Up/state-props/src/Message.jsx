import { Component, Fragment } from "react";

class Message extends Component{

state;
constructor(props){
    super(props)
    this.state={msg:"hello"}
}
UpdateHandler = (value)=>{
    this.setState({msg:value})
}

render(){
    return(
        <Fragment>
                        <h1>{this.state.msg} </h1>
                        <button onClick={this.UpdateHandler.bind(this,"good Morning") } >Good morning</button>
                        <button onClick={this.UpdateHandler.bind(this,"good Afternoon") }>Good afternoon</button>
                        <button onClick={this.UpdateHandler.bind(this,"good evening") }>Good evening</button>
                        <button onClick={this.UpdateHandler.bind(this,"good night") }>Good night</button>
              
        </Fragment>
    )
}


}
export default Message