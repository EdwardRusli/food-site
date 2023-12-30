import React, { Component, Profiler } from "react";
import axios from "axios";

class NavBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const handleLogout = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/logout/", {
          withCredentials: true,
        });
        localStorage.removeItem("token");
        //setIsLoggedIn(false);
        console.log(response.data.message);
        window.location.reload();
      } catch (err) {
        console.log(err);
      }

      // Store the token in local storage or state
    };
    return (
      <div className="NavBar position-relative fs-4 shadow">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center">
              <ul className="navbar-nav mb-2 mb-lg 0">
                <li className="nav-item">
                  <a className="nav-link active" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" href="/login">
                    Profile
                  </a>
                </li>
                {localStorage.getItem("token") != null ? (
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      href="#"
                      onClick={() => handleLogout()}
                    >
                      Logout
                    </a>
                  </li>
                ) : (
                  true
                )}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
