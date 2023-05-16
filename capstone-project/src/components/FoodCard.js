import React from "react";

const FoodCard = (props) => {
    return (
        <div className="foodCard">
            <img src={props.image} alt={props.imgText} className="foodImages" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8">
                        <h6 style={{fontSize:'1rem', fontWeight:'900'}}>{props.imgText}</h6>
                    </div>
                    <div className="col-4">
                        <p style={{fontSize:'0.8rem', color:'#ee9972'}}>{props.price}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p style={{fontSize:'0.6rem'}}>{props.desc}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p style={{fontSize:'0.6rem', fontWeight: '900'}}>Order a delivery <i className="fas fa-shipping-fast"></i></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FoodCard;