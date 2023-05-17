import React from 'react'
import star from '../assets/star.jpg'
import user1 from '../assets/user1.jpg'
import user2 from '../assets/user2.jpg'
import user3 from '../assets/user3.jpg'
import user4 from '../assets/user4.jpg'

export default function Testimonial(props) {

    const userImage = {
        user1: user1,
        user2: user2,
        user3: user3,
        user4: user4
    };

    return (
        <div className="container-fluid testimonial">
            <div className="row stars">
                <div className="col-12">
                    <img src={star} className="star" alt="star" />
                    <img src={star} className="star" alt="star" />
                    <img src={star} className="star" alt="star" />
                    <img src={star} className="star" alt="star" />
                    <img src={star} className="star" alt="star" />
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <img src={userImage[props.user]} className="user" alt="user" />
                </div>
                <div className="col-8">
                    <h5>{props.name}</h5><h6>{props.job}</h6>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    Lorem epsom Lorem epsom Lorem epsom Lorem epsom Lorem epsom Lorem epsom 
                </div>
            </div>
        </div>
    )
}