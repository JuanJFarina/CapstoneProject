import React, { Component } from 'react'
import food from "../assets/restauranfood.jpg"
import Button from "./Button.js"
import greekSalad from "../assets/greek salad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemon dessert.jpg"

export class Main extends Component {
  render() {
    return (
      <main className="container-fluid">
        <div className="row green">
          <div className="col-sm-3 d-none d-sm-block"></div>
          <div className="col-6 col-sm-3">
            <div>
              <h1>Little Lemon</h1>
              <h2>Chicago</h2>
              <p>We are a family owned<br/>Mediterranean restaurant,<br/>focused on traditional<br/>recipes served with a modern<br/>twist.</p>
              <Button text="Reserve a table"></Button>
            </div>
          </div>
          <div className="col-6 col-sm-3 main-food">
            <img src={food} alt="food" className="food"></img>
          </div>
          <div className="col-sm-3 d-none d-sm-block"></div>
        </div>
        <div className="row specials">
          <div className="col-sm-3 d-none d-sm-block"></div>
          <div className="col-6 col-sm-3">
            <h1>This Weeks Special !</h1>
          </div>
          <div className="col-6 col-sm-3">
              <Button text="Online Menu"></Button>
          </div>
          <div className="col-sm-3 d-none d-sm-block"></div>
        </div>
        <div className="row specialFood">
          <div className="col-sm-3 d-none d-sm-block"></div>
          <div className="col-12 col-sm-2">
            <div className="foodCard">
              <img src={greekSalad} alt="Greek Salad" />
              <h6>Greek Salad</h6>
            </div>
          </div>
          <div className="col-12 col-sm-2 d-none d-sm-block">
            <div className="foodCard">
              <img src={bruchetta} alt="Bruchetta" />
              <h6>Bruchetta</h6>
            </div>
          </div>
          <div className="col-12 col-sm-2 d-none d-sm-block">
            <div className="foodCard">
              <img src={lemonDessert} alt="Lemon Dessert" />
              <h6>Lemon Dessert</h6>
            </div>
          </div>
          <div className="col-sm-3 d-none d-sm-block"></div>
        </div>
      </main>
    )
  }
}
