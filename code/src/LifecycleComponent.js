import React, { Component } from "react";
import axios from "axios";

class LifecycleComponent extends Component {
  constructor(props) {
    // this is referring to LifecycleComponent
    super(props);
    this.state = {
      name: "alina",
      users: [],
    };
  }

  componentDidMount = () => {
    //api calls
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        this.setState({
          users: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log("component did mount");
  };

  handleClick = () => {
    this.setState({
      name: "harry",
    });
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    console.log("should component update", nextState);
    // if() {}

    return false;
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("componnet did update", prevState);
  };

  render() {
    const userList = this.state.users.length ? (
      this.state.users.map((user) => {
        return (
          <React.Fragment key={user.id}>
            <p>{user.name}</p>
            <p>{user.phone}</p>
          </React.Fragment>
        );
      })
    ) : (
      <p>No Post Yet</p>
    );

    return (
      <>
        {this.state.name}
        <button onClick={this.handleClick}>Update</button>
        <p>{userList}</p>
      </>
    );
  }
}

export default LifecycleComponent;

// free
// get api
// https://jsonplaceholder.typicode.com/users
// https://jsonplaceholder.typicode.com/posts/
// https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001

// HTTP methods
//get, post, update delete

// free post
// let api = https://reqres.in/api/users
// let user = {
//     "name": "morpheus",
//     "job": "leader"
// }

// axios.post(api, user).then().catch()
