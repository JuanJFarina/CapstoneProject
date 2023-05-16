import React from 'react'
import Button from "./Button.js"
import greekSalad from "../assets/greekSalad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemonDessert.jpg"
import FoodCard from "./FoodCard.js"

export default function Specials() {
    const greekSaladDesc = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";
    const bruchettaDesc = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
    const lemonDessertDesc = "This comes straight from grandma's recipe book, every last ingredient has been sources and is as authentic as can be imagined.";
    return (
        <>
            <div className="row specials">
                <div className="col-1 col-sm-3"></div>
                <div className="col-5 col-sm-3">
                    <h1>This Weeks Special !</h1>
                </div>
                <div className="col-5 col-sm-3">
                    <Button text="Online Menu" />
                </div>
                <div className="col-1 col-sm-3"></div>
            </div>
            <div className="row specialFood">
                <div className="col-1 col-sm-3"></div>
                <div className="col-10 col-sm-2">
                    <FoodCard image={greekSalad} imgText="Greek Salad" price="$12.99" desc={greekSaladDesc} />
                </div>
                <div className="col-10 col-sm-2 d-none d-sm-block">
                    <FoodCard image={bruchetta} imgText="Bruchetta" price="$5.99" desc={bruchettaDesc} />
                </div>
                <div className="col-10 col-sm-2 d-none d-sm-block">
                    <FoodCard image={lemonDessert} imgText="Lemon Dessert" price="$5.00" desc={lemonDessertDesc} />
                </div>
                <div className="col-1 col-sm-3"></div>
            </div>
        </>
    )
}