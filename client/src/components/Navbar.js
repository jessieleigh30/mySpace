import React from "react";
import { AuthConsumer, } from "../providers/AuthProvider";
import { Menu, Icon } from "semantic-ui-react";
import { Link, withRouter } from "react-router-dom";


class Navbar extends React.Component {

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location } = this.props;

    if (user) {
      return (
        <Menu.Menu position="right" icon="labeled">
          <Menu.Item name="log out"
            name="Logout"
            onClick={() => handleLogout(this.props.history)}
          >
            <Icon name="log out" />
            Log Out
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position="right" icon="labeled">
          <Link to="/login">
            <Menu.Item name="user secret"
              name="Login"
              id="login"
              active={location.pathname === "/login"}
            >
              <Icon name="user secret" />
              Login
        </Menu.Item>
          </Link>
          <Link to="/register">
            <Menu.Item name="pencil"
              name="Register"
              id="register"
              active={location.pathname === "/register"}
            >
              <Icon name="pencil" />
              Register
            </Menu.Item>
          </Link>
        </Menu.Menu>
      )
    }

  }
  render() {
    return (
      <div>
        <Menu
          secondary
          color="purple"
          inverted
          icon="labeled"
        >

          <Link to="/">
            <Menu.Item name="home"
              id="home"
              active={this.props.location.pathname === "/"}
            >
              <Icon name="home" />
              Home
            </Menu.Item>
          </Link>

            <Link to="/my_friends">
            <Menu.Item>
              <Icon name="users"/>
                My Buds
              </Menu.Item>
            </Link>


          {this.rightNavItems()}
        </Menu>
      </div>
    )
  }
}
export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        {auth =>
          <Navbar {...this.props} auth={auth} />
        }
      </AuthConsumer>
    )
  }
}



export default withRouter(ConnectedNavbar);