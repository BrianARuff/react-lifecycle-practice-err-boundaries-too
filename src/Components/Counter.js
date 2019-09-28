import React from "react";

export default function Counter(props) {
  function handleDecrementCount() {
    return props.decrementCount();
  }
  function handleIncrementCount() {
    // props.this.setState({count: props.this.state.count += 1});
    return props.incrementCount();
  }
  return (
    <div 
      style={{
        display: "flex", 
        justifyContent: "center", 
        alignContent: "center", 
        height: "100vh", 
        border: "1px solid black", 
        flexDirection: "column"}}
    > 
      <span
        style={{
          textTransform: "capitalize"
        }}
      >
        {props.numString}
        ... {props.count}
      </span>
      <div>
        <label 
          htmlFor="Increment"
        >
          Increment Count
        </label>
        <button 
          onClick={handleIncrementCount}
          style={{height: "30px", margin: 20}}
        >
          Increment count (click)
        </button>
      </div>
      <div>
        <label 
          htmlFor="Decrement"
        >
          Decrement Count
        </label>
        <button 
          onClick={handleDecrementCount}
          style={{height: "30px", margin: 20}}
        >
          Decrement count (click)
        </button>
      </div>
    </div>
  )
}