import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

describe('BookingForm', () => {
  test('renders all form inputs with correct attributes', () => {
    render(<BookingForm />);

    // First Name input
    const firstNameInput = screen.getByLabelText('First Name');
    expect(firstNameInput).toHaveAttribute('type', 'text');
    expect(firstNameInput).toHaveAttribute('name', 'firstName');
    expect(firstNameInput).toHaveAttribute('minLength', '2');
    expect(firstNameInput).toBeRequired();

    // Last Name input
    const lastNameInput = screen.getByLabelText('Last Name');
    expect(lastNameInput).toHaveAttribute('type', 'text');
    expect(lastNameInput).toHaveAttribute('name', 'lastName');
    expect(lastNameInput).toHaveAttribute('minLength', '2');
    expect(lastNameInput).toBeRequired();

    // Contact Number input
    const contactNumberInput = screen.getByLabelText('Contact Number');
    expect(contactNumberInput).toHaveAttribute('type', 'text');
    expect(contactNumberInput).toHaveAttribute('name', 'contactNumber');
    expect(contactNumberInput).toHaveAttribute('pattern', '[0-9]{2}-[0-9]{3}-[0-9]{7}');

    // Choose date input
    const chooseDateInput = screen.getByLabelText('Choose date');
    expect(chooseDateInput).toHaveAttribute('type', 'date');
    expect(chooseDateInput).toHaveAttribute('name', 'date');
    expect(chooseDateInput).toBeRequired();

    // Choose time select
    const chooseTimeSelect = screen.getByLabelText('Choose time');
    expect(chooseTimeSelect).toHaveAttribute('name', 'time');
    expect(chooseTimeSelect).toBeRequired();

    // Number of guests input
    const numberOfGuestsInput = screen.getByLabelText('Number of guests');
    expect(numberOfGuestsInput).toHaveAttribute('type', 'number');
    expect(numberOfGuestsInput).toHaveAttribute('name', 'noOfGuests');
    expect(numberOfGuestsInput).toHaveAttribute('min', '1');
    expect(numberOfGuestsInput).toHaveAttribute('max', '10');
    expect(numberOfGuestsInput).toBeRequired();

    // Occasion select
    const occasionSelect = screen.getByLabelText('Occasion');
    expect(occasionSelect).toHaveAttribute('name', 'occasion');
    expect(occasionSelect).toBeRequired();

    // Submit button
    const submitButton = screen.getByLabelText('submit button');
    expect(submitButton).toHaveAttribute('type', 'submit');
    expect(submitButton).toHaveAttribute('value', 'Reserve');
  });

  test('updates form validity state correctly', () => {
    render(<BookingForm />);

    const firstNameInput = screen.getByLabelText('First Name');
    const lastNameInput = screen.getByLabelText('Last Name');
    const chooseDateInput = screen.getByLabelText('Choose date');
    const chooseTimeSelect = screen.getByLabelText('Choose time');
    const numberOfGuestsInput = screen.getByLabelText('Number of guests');
    const occasionSelect = screen.getByLabelText('Occasion');
    const submitButton = screen.getByLabelText('submit button');

    expect(submitButton).toBeDisabled();

    fireEvent.change(firstNameInput, { target: { value: 'John' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(lastNameInput, { target: { value: 'Doe' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(chooseDateInput, { target: { value: '2023-11-22' } });
    expect(submitButton).toBeDisabled();

    fireEvent.change(chooseTimeSelect, { target : { value: '17:00' }});
    expect(submitButton).toBeDisabled();

    fireEvent.change(numberOfGuestsInput, { target : { value: '2' }});
    expect(submitButton).toBeDisabled();

    fireEvent.change(occasionSelect, { target : { value: 'Birthday' }});
    expect(submitButton).toBeEnabled();
})})