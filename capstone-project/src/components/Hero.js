import React from 'react'
import Button from './Button.js'
import food from "../assets/restauranfood.jpg"

export default function Hero() {
    return (
        <div className="row green">
            <div className="col-1 col-sm-3"></div>
            <div className="col-5 col-sm-3">
            <div>
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned<br/>Mediterranean restaurant,<br/>focused on traditional<br/>recipes served with a modern<br/>twist.</p>
                <Button text="Reserve a table" />
            </div>
            </div>
            <div className="col-5 col-sm-3 main-food">
                <img src={food} alt="food" className="food"></img>
            </div>
            <div className="col-1 col-sm-3"></div>
        </div>
    )
}