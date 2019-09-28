import React from 'react';
import Counter from "./Components/Counter.js";
import ErrorBoundary from "./Components/ErrorBoundary.js";
import axios from "axios";
import './App.css';

class App extends React.Component {

  constructor() { // lifecycle method, runs only once before mounting the component and initializes the components state if present.
    super();
    this.state = {
      count: 0,
      numString: "",
      hasError: false,
      error: "",
      info: ""
    }
  }

  componentDidCatch(error, info) {
    this.setState({hasError: true, error, info}, () => console.error(this.state.error, this.state.info));
  }

  componentDidMount() { // runs everytime component mounts, and is the perfect place to place API calls since the DOM has been loaded but not yet rendered to the page.
    axios
      .get(`http://numbersapi.com/${this.state.count}/trivia?notfound=floor&fragment`)
      .then(res => this.setState({numString: res.data, count: 0}, () => console.log(this.state.numString)))
      .catch(err => console.error(err));
  }

  incrementCount = () => {
    const prevState = this.state;
    if (prevState.count < 107) {
      axios
      .get(`http://numbersapi.com/${this.state.count}/trivia?notfound=floor&fragment`)
      .then(res => this.setState({numString: res.data, count: prevState.count += 1}, () => console.log(this.state.numString)))
      .catch(err => console.error(err));
    }
  }
  
  decrementCount = () => {
    const prevState = this.state;
    if (prevState.count > 0) {
      axios
      .get(`http://numbersapi.com/${this.state.count}/trivia?notfound=floor&fragment`)
      .then(res => this.setState({numString: res.data, count: prevState.count -= 1}, () => console.log(this.state.numString)))
      .catch(err => console.error(err));
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.count === this.state.count) {
      return true;
    } else {
      return false;
    }
  }

  render() { // render is the only required method
    return (
      <div className="App">
        {
          this.state.hasError ?
          <ErrorBoundary /> :
          <Counter numString={this.state.numString} this={this} count={this.state.count} incrementCount={this.incrementCount} decrementCount={this.decrementCount} />
        }
      </div>
    )
  }
}

export default App;
