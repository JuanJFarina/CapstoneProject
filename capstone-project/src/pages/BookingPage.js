import { useState, useReducer } from "react"
import BookingForm from "../components/BookingForm"
import { fetchAPI, submitAPI } from "../Api.js"
import { useNavigate } from "react-router-dom"

export function initializeTimes(date) {
    return fetchAPI(date);
}

export function updateTimes(date) {
    const dateObj = new Date(date);
    return fetchAPI(dateObj);
}
 
export default function BookingPage() {
    
    const [date, setDate] = useState(new Date());

    const navigate = useNavigate();

    function submitForm(formData) {
        const isSubmitted = submitAPI(formData);
        if (isSubmitted) {
            navigate("/confirmed");
        }
    }
  
    function reducer(state, action) {
        let newState
        switch (action.type) {
            case 'UPDATE_TIMES':
                const newDate = new Date(action.payload);
                newState = updateTimes(newDate)
                break;
            default:
                throw new Error()
        }
        return newState
    }

    const [availableTimes, dispatch] = useReducer(reducer, initializeTimes(date));
    
    return (
        <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm}/>
    )
}