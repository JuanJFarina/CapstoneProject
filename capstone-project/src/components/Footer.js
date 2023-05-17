import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <footer className="footer container-fluid">
        <div className="row">
          <div className="col-1 col-sm-3"></div>
          <div className="col-10 col-sm-6 footer-elements">
            <div>
                <p>Doormat Navigation</p>
                <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Reservations</li>
                <li>Order Online</li>
                <li>Login</li>
                </ul>
            </div>
            <div>
                <p>Contact</p>
                <ul>
                <li>Address</li>
                <li>Phone Number</li>
                <li>Email</li>
                </ul>
            </div>
            <div>
                <p>Social Media Links</p>
                <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
                </ul>
            </div>
          </div>
          <div className="col-1 col-sm-3"></div>
        </div>
      </footer>
    )
  }
}