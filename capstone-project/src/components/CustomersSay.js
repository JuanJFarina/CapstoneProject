import React from 'react'
import Testimonial from './Testimonial'

export default function CustomersSay() {
  return (
    <>
      <div className="row customers-say">
        <div className="col-1 col-sm-3"></div>
        <div className="col-10 col-sm-6">
          <h3 style={{textAlign: 'center'}}>What our customers say</h3>
        </div>
        <div className="col-1 col-sm-3"></div>
      </div>
      <div className="row customers-say">
        <div className="col-2 col-sm-2"></div>
        <div className="col-8 col-sm-2">
          <Testimonial user='user1' name="Sara Lopez" job="professional" />
        </div>
        <div className="col-sm-2 d-none d-sm-block">
          <Testimonial user='user2' name="John Doe" job="professional" />
        </div>
        <div className="col-sm-2 d-none d-sm-block">
          <Testimonial user='user3' name="Barbara Lam" job="professional" />
        </div>
        <div className="col-sm-2 d-none d-sm-block">
          <Testimonial user='user4' name="Mathias Banel" job="professional" />
        </div>
        <div className="col-2 col-sm-2"></div>
      </div>
    </>
  )
}