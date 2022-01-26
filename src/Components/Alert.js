import React from "react";

function Alert(props) {
  let capital = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  return (
    <div style={{ height: "7vh" }}>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.typeof} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{capital(props.alert.typeof)}:</strong> {props.alert.msg}
        </div>
      )}
    </div>
  );
}

export default Alert;
