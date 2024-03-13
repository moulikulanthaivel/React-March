import { Component, Fragment } from "react";
import Props2 from "./Props2";

class Props1 extends Component {
  user = {
    uid: 101,
    uname: "Rahul Gandhi",
    uemail: "rg@gmail.com",
  };
  pLoc = ["Wayanad", "New Delhi", "Bangalore"];
  render() {
    return (
      <Fragment>
        <h1>props1</h1>
        <hr />
        <Props2 user={this.user} loc={this.pLoc} />
      </Fragment>
    );
  }
}
export default Props1;
