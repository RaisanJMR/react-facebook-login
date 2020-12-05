import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";

class Facebook extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      userID: "",
      name: "",
      email: "",
      picture: "",
    };
  }
  responseFacebook = (response) => {
    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });
  };
  componentClicked = () => {
    console.log("clicked");
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#ccc",
            padding: "20px",
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h2>welcome {this.state.name}</h2>
          <h3>Email: {this.state.email}</h3>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="396356824816261"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}

export default Facebook;
