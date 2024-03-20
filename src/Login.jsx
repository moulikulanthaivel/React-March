import { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      number: "",
    };
  }
  updateHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  submitHandler = (event) => {
    event.preventdefault();
    console.log(this.state)
  };

  render() {
    return (
      <>
        <pre>{JSON.stringify(this.state)}</pre>
        <form onSubmit={this.submitHandler}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={this.updateHandler}
          />{" "}
          <br />
          <label>password</label>
          <input
            type="text"
            name="password"
            id="password"
            onChange={this.updateHandler}
          />
          <br />
          <label>number</label>
          <input
            type="tel"
            name="number"
            id="number"
            onChange={this.updateHandler}
          />
          <br />
          <input
            type="submit"
            value="login"
            pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
            required
          />
          <br />
        </form>
      </>
    );
  }
}
export default Login;
