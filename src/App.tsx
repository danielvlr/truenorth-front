import { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// Model
import IUser from './types/user.type';

// Service
import AuthService from "./services/auth.service";

// Components
import Login from "./components/login.component";
import Home from "./components/home.component";
import NewOperation from "./components/new-operation.component";
import UserRecord from "./components/user-record.component";


import EventBus from "./common/EventBus";

type Props = {};

type State = {
  showModeratorBoard: boolean,
  showAdminBoard: boolean,
  currentUser: IUser | undefined
}

class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user
      });
    }

    EventBus.on("logout", this.logOut);
  }

  componentWillUnmount() {
    EventBus.remove("logout", this.logOut);
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showModeratorBoard: false,
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    const { currentUser, showModeratorBoard, showAdminBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
        {currentUser && (
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/newOperation"} className="nav-link">
                New Operation
              </Link>
            </li>

            <li className="nav-item">
              <Link to={"/userRecord"} className="nav-link">
                User Records  
              </Link>
            </li>

          </div>
          )}
          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
                  LogOut
                </a>
              </li>
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/newOperation" element={<NewOperation />} />
            <Route path="/userRecord" element={<UserRecord />} />
            
          </Routes>
        </div>

        { /*<AuthVerify logOut={this.logOut}/> */}
      </div>
    );
  }
}

export default App;