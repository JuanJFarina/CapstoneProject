import React from 'react'
import food from "../assets/restauranfood.jpg"
import Button from "./Button.js"
import greekSalad from "../assets/greekSalad.jpg"
import bruchetta from "../assets/bruchetta.svg"
import lemonDessert from "../assets/lemonDessert.jpg"
import FoodCard from "./FoodCard.js"

const Main = () => {
  const greekSaladDesc = "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.";
  const bruchettaDesc = "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.";
  const lemonDessertDesc = "This comes straight from grandma's recipe book, every last ingredient has been sources and is as authentic as can be imagined.";
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
          <FoodCard image={greekSalad} imgText="Greek Salad" price="$12.99" desc={greekSaladDesc}></FoodCard>
        </div>
        <div className="col-12 col-sm-2 d-none d-sm-block">
          <FoodCard image={bruchetta} imgText="Bruchetta" price="$5.99" desc={bruchettaDesc}></FoodCard>
        </div>
        <div className="col-12 col-sm-2 d-none d-sm-block">
          <FoodCard image={lemonDessert} imgText="Lemon Dessert" price="$5.00" desc={lemonDessertDesc}></FoodCard>
        </div>
        <div className="col-sm-3 d-none d-sm-block"></div>
      </div>
    </main>
  )
}

export default Main;