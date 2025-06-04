import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "../index.css";

function TogglePassword() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState("");

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const toggleVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className="container">
      <h1 className="title">Toggle Password</h1>
      <div className="password-wrapper">
        <input
          type={passwordVisible ? "text" : "password"}
          id="password"
          placeholder="Enter password"
          className="password-input"
          data-testid="password-input"
          value={password}
          onChange={handlePasswordChange}
        />
        <span className="icon" data-testid="toggle-icon" onClick={toggleVisibility}>
            {passwordVisible ? <Eye size={18} /> : <EyeOff size={18} />}
        </span>
      </div>
      <span className="visibility-label" data-testid="visibility-label">
        {passwordVisible ? "Password Visible" : "Password Hidden"}
      </span>
    </div>
  );
}

export default TogglePassword;
