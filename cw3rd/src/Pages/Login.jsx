import React from "react";

export default function Login({ setisAuth, isAuth }) {
  const [email, setEmail] = React.useState("");
  return (
    <div>
      <label htmlFor="">Email: </label>
      <input
        type="email"
        placeholder="Enter Your Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        disabled={email.length == 0}
        onClick={() => setisAuth(!isAuth)}
        style={{ backgroundColor: "teal" }}
      >
        Subscribe
      </button>
    </div>
  );
}
