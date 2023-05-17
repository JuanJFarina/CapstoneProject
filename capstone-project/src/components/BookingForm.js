import { useState, useEffect } from "react"

export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Occasion"
    })

    const [formValid, setFormValid] = useState(false);

    const handleFormChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData, 
            [name]: value
        }))
    }

    const handleDateChange = async (event) => {
        const { name, value } = event.target;
      
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }))

        dispatch({ type: 'UPDATE_TIMES', payload: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        submitForm(formData);
    }

    useEffect(() => {
        const isFormValidUno = Object.values(formData).every(value => value !== "");
        setFormValid(isFormValidUno);
        const formElement = document.getElementById("booking-form");
        const isFormValidDos = formElement.checkValidity();
        setFormValid(isFormValidUno && isFormValidDos);
    }, [formData]);

    const currentDate = new Date().toISOString().split("T")[0];
    
    const options = availableTimes.map(time => <option key={time}>{time}</option>);
    
    return (
        <main className="container-fluid booking">
            <p style={{textAlign:'center'}}>Please fill in the form below accurately to enable us serve you nicely.</p>
            <form id="booking-form" onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-1 col-sm-4"></div>
                    <div className="col-5 col-sm-3">
                        <label htmlFor="first-name">First Name</label>
                        <label htmlFor="last-name">Last Name</label>
                        <label htmlFor="contact-number">Contact Number</label>
                        <label htmlFor="res-date">Choose date</label>
                        <label htmlFor="res-time">Choose time</label>
                        <label htmlFor="guests">Number of guests</label>
                        <label htmlFor="occasion">Occasion</label>
                    </div>
                    <div className="col-5 col-sm-3 inputs">
                        <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} minLength={2} required />
                        <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} minLength={2} required />
                        <input type="text" id="contact-number" name="contactNumber" placeholder="54-341-3200048" value={formData.contactNumber} onChange={handleFormChange} pattern="[0-9]{2}-[0-9]{3}-[0-9]{7}" />
                        <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
                        <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                            {options}
                        </select>
                        <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
                        <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                            <option value="Occasion">Occasion</option>
                            <option value="Birthday">Birthday</option>
                            <option value="Engagement">Engagement</option>
                            <option value="Anniversary">Anniversary</option>
                        </select>
                    </div>
                    <div className="col-1 col-sm-4"></div>
                </div>
                <div className="row">
                    <div className="col-12 submitArea" style={{textAlign:'center'}}>
                        <input type="submit" value="Reserve" aria-label="submit button" disabled={!formValid} className="submit button clickable" />
                    </div>
                </div>
            </form>
        </main>
    )
}