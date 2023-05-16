import React, { Component } from 'react'
import Nav from "./Nav.js"
import logo from "../assets/Logo.svg"

export class Header extends Component {
  render() {
    return (
      <header className="header container-fluid">
        <div className="row">
          <div className="col-1 col-sm-3"></div>
          <div className="col-10 col-sm-6">
            <div className="header-fluid">
              <img src={logo} alt="logo"></img>
              <Nav />
            </div>
          </div>
          <div className="col-1 col-sm-3"></div>
        </div>
      </header>
    )
  }
}
