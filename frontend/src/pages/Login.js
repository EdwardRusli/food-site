import React, { useState } from "react";
import axios from "axios";

import NavBar from "../components/NavBar";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") === null ? false : true
  );
  console.log(localStorage.getItem("token"));

  const handleLogin = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/login/",
      {
        username: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const token = response.data.token;
    if (token) {
      localStorage.setItem("token", token);
      window.location.reload();
    }
    console.log(response.data.error ? response.data.error : token);

    // Store the token in local storage or state
  };

  const handleRegister = async () => {
    const response = await axios.post(
      "http://localhost:8000/api/register/",
      {
        username: username,
        password: password,
      },
      {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      }
    );
    const token = response.data.token;
    if (token) {
      handleLogin();
      localStorage.setItem("token", token);
      setIsLoggedIn(true);
    }
    console.log(response.data.error ? response.data.error : token);

    // Store the token in local storage or state
  };

  // const handleLogout = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:8000/api/logout/", {
  //       withCredentials: true,
  //     });
  //     localStorage.removeItem("token");
  //     setIsLoggedIn(false);
  //     console.log(response.data.message);
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   // Store the token in local storage or state
  // };
  return (
    <>
      <NavBar />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {/* <button onClick={handleLogout}>Logout</button> */}
      <button onClick={handleRegister}>Register</button>
      {isLoggedIn === true ? <h1>logged in</h1> : <h1>not logged in</h1>}
    </>
  );
};
export default Login;
