import { useState } from "react";

import axios from "axios";

import "./Auth.css";

function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(

        "http://localhost:9090/api/auth/login",

        {
          email,
          password
        }

      );

      console.log(response.data);

      localStorage.setItem(

        "user",

        JSON.stringify(response.data.user)

      );

      alert("Login Successful");

      window.location.href = "/";

    } catch (error) {

      console.log(error);

      alert(

        error.response?.data?.message ||

        "Login Failed"

      );

    }

  };

  return (

    <div className="auth-container">

      <form
        className="auth-form"
        onSubmit={handleSubmit}
      >

        <h2>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e)=>
            setEmail(e.target.value)
          }
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e)=>
            setPassword(e.target.value)
          }
          required
        />

        <button type="submit">

          Login

        </button>

        <p>

          Don't have account?

          <a href="/register">

            Create Account

          </a>

        </p>

      </form>

    </div>

  );

}

export default Login;