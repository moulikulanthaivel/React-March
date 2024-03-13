import { Component, Fragment } from "react";

class Props2 extends Component {
  render() {
    return (
      <Fragment>
        <h2>employee name:{this.props.user.uid} </h2>
        <p>employee location:{this.props.loc[2]} </p>
      </Fragment>
    );
  }
}
export default Props2;
