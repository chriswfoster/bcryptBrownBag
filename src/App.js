import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"

class App extends Component {
  constructor() {
    super()
    this.state = {
      passwordText: "",
      usernameText: ""
    }
  }

  usernameHandler(val) {
    this.setState({ usernameText: val })
  }
  passwordHandler(val) {
    this.setState({ passwordText: val })
  }
  sendIt(username, password) {
    axios.put("/api/hereComesThePW", {
      username,
      password
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <input onChange={e => this.usernameHandler(e.target.value)} />
        <input onChange={e => this.passwordHandler(e.target.value)} />
        <button onClick={()=> this.sendIt(this.state.usernameText, this.state.passwordText)}>Submit</button>
      </div>
    )
  }
}

export default App
