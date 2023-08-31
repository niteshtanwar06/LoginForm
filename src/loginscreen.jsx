import React from "react";
import Input from "./loginInput";

function Screen() {
  return (
    <div className="loginBOx">
      <h1>Login Form</h1>
      <form className="form">
        <Input
          label="username"
          labelfor="pass"
          inputId="uname"
          inputName="uname"
          inputType="text"
          inputPlaceholder="Enter Your Name"
        />
        <Input
          label="Password"
          labelfor="pass"
          inputId="pass"
          inputName="pass"
          inputType="password"
          inputPlaceholder="Enter Your Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Screen;
