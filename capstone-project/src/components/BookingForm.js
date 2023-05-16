import React, { useState } from 'react'

export default function BookingForm(props) {
    const [date, setDate, time, setTime, number, setNumber, occasion, setOccasion] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        switch(e.id) {
            case "res-date":
                props.dispatch(e.value);
                break;
            case "res-time":
                setTime(e.value);
                break;
            case "guests":
                setNumber(e.value);
                break;
            case "occasion":
                setOccasion(e.value);
            break;
        }
    }

    return (
        <form style={{display: "grid", maxWidth: "200px", gap: "20px"}}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" onChange={handleChange} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" onChange={handleChange}>
                {props.availableTimes.map((time) => {
                    return <option>{time}</option>
                })}
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" onChange={handleChange} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" onChange={handleChange}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" onChange={handleChange} />
        </form>
    )
}