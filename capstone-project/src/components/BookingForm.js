import { useState, useEffect } from "react"

export default function BookingForm({availableTimes, dispatch, submitForm}) {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        contactNumber: "",
        date: "",
        time: "00:00",
        noOfGuests: 1,
        occasion: "Birthday"
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
        <main className="container-fluid">
            <div className="row">
                <div className="col-1 col-sm-4"></div>
                <div className="col-10 col-sm-4">
                    <p>Please fill in the form below accurately to enable us serve you nicely.</p>
                    <form id="booking-form" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="first-name">First Name</label>
                            <input type="text" id="first-name" name="firstName" value={formData.firstName} onChange={handleFormChange} minLength={2} required />
                        </div>
                        <div>
                            <label htmlFor="last-name">Last Name</label>
                            <input type="text" id="last-name" name="lastName" value={formData.lastName} onChange={handleFormChange} minLength={2} required />
                        </div>
                        <div>
                            <label htmlFor="contact-number">Contact Number</label>
                            <input type="text" id="contact-number" name="contactNumber" placeholder="54-341-3200048" value={formData.contactNumber} onChange={handleFormChange} pattern="[0-9]{2}-[0-9]{3}-[0-9]{7}" />
                        </div>
                        <div>
                            <div>
                                <label htmlFor="res-date">Choose date</label>
                                <input type="date" id="res-date" name="date" value={formData.date} onChange={handleDateChange} required min={currentDate}/>
                            </div>
                            <div>
                                <label htmlFor="res-time">Choose time</label>
                                <select id="res-time " name="time" value={formData.time} onChange={handleFormChange} required>
                                    {options}
                                </select>
                            </div>
                        </div>
                        <div>
                            <div>
                                <label htmlFor="guests">Number of guests</label>
                                <input type="number" placeholder="1" min="1" max="10" required id="guests" name="noOfGuests" value={formData.noOfGuests} onChange={handleFormChange}/>
                            </div>
                            <div>
                                <label htmlFor="occasion">Occasion</label>
                                <select id="occasion" name="occasion" required value={formData.occasion} onChange={handleFormChange}>
                                    <option>Birthday</option>
                                    <option>Anniversary</option>
                                </select>
                            </div>
                        </div>
                        <input type="submit" value="Reserve" aria-label="submit button" disabled={!formValid}/>
                    </form>
                </div>
                <div className="col-1 col-sm-4"></div>
            </div>
        </main>
    )
}