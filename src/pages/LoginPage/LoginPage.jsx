import React from "react";
import { useState } from "react";

const LoginPage = ({ props }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props(username);
  };
  return (
    <div>
      <h1>Enter a User Name</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default LoginPage;
