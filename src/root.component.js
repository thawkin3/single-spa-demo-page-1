import React from "react";

const containerStyles = {
  background: "#379392",
  color: "white",
  padding: "20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  fontSize: "3rem"
};

export default function Root(props) {
  return (
    <div style={containerStyles}>
      <p>Page 1 App</p>
    </div>
  );
}
