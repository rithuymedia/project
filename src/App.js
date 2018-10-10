import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { BACKEND_API } from "./config/Keys";

class App extends Component {
  state = {
    emp_id: "",
    email: "",
    user_type: ""
  };

  changeId = e => {
    this.setState({
      emp_id: e.target.value
    });
  };

  changeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };

  changeType = e => {
    this.setState({
      user_type: e.target.value
    });
  };

  addToGuestBook = e => {
    e.preventDefault();
    axios
      .post(
        BACKEND_API,
        {
          headers: {
            "Content-Type": "application/json"
          }
        },
        {
          emp_id: this.state.emp_id,
          email: this.state.email,
          user_type: this.state.user_type
        }
      )
      .then(res => {
        console.log(res, "Signature added");
      })
      .catch(err => {
        console.log(err, "Signature not added");
      });
  };

  render() {
    return (
      <div className="App">
        <form>
          <input
            type="text"
            name="Employee_Id"
            onChange={this.changeId}
            value={this.state.emp_id}
            placeholder="Enter your id"
          />
          <input
            type="email"
            name="Email"
            onChange={this.changeEmail}
            value={this.state.email}
            placeholder="Enter your email"
          />
          <input
            type="text"
            name="User_Type"
            onChange={this.changeType}
            value={this.state.user_type}
            placeholder="Enter your type"
          />
          <button
            className="submitbuttonguestbook"
            type="submit"
            onClick={this.addToGuestBook}
          >
            Submit data{" "}
          </button>{" "}
        </form>{" "}
      </div>
    );
  }
}

export default App;
