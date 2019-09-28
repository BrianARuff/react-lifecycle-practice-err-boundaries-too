import React from "react";

export default function ErrorBoundary(props) {
  return (
    <div
    style={{
      display: "flex", 
      justifyContent: "center", 
      alignContent: "center", 
      height: "100vh", 
      border: "1px solid black", 
      flexDirection: "column",
      color: "red"
    }}
    >
      <h4>Error Loading Counter</h4>
    </div>
  )
}