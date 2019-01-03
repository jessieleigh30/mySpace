import React from "react";
import axios from "axios";

const AuthContext = React.createContext();
export const AuthConsumer = AuthContext.Consumer;

export class AuthProvider extends React.Component {
  state = { user: null};

handleRegister = (user, history) => {
  axios.post("api/auth", user )
  .then( res => {
    this.setState({ user: res.data.data, });
    history.push("/")
  })
  .catch ( res => {
    console.log(res);
  })
}

handleLogin = ( user, history) => {
  axios.post("/api/auth/sign_in", user)
  .then( res => {
    //res.data.data twice is the way it should be, data with user data in it
    this.setState({ user: res.data.data, });
    history.push("/");
  })
  .catch( res => {
    console.log(res);
  })
}

handleLogout = (history) => {
  axios.delete("/api/auth/sign_out")
  .then( res => {
      this.setState({ user: null});
      history.push("/")
  })
}


  render() {
    return (
      <AuthContext.Provider value={{
        ...this.state,
        authentication: this.state.user !== null,
        handleRegister: this.handleRegister,
        handleLogin: this.handleLogin,
        handleLogout: this.handleLogout,
        setuser: (user) => this.setState({ user })
      }}>
        {this.props.children}
      </AuthContext.Provider>

    )
  }
}