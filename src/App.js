import React from "react"
import ReactDOM from "react-dom"
import logo from "./logo.svg"
import "./App.css"


function apptwo() {
  return(
      <div className="App">
        <h2>Testing PV</h2>
        <ul>
        <li>one</li>
        <li>one</li>
        </ul>
      </div>
  )
}

ReactDOM.render(<apptwo />, document.getElementById('root'))
