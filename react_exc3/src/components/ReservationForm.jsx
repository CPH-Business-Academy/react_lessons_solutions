import React, { useState } from 'react';

function ReservationForm() {
  const initialValue = {
    payByCreditCard: false,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  };
  const [reservation, setReservation] = useState(initialValue);

  const handleChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    setReservation({ ...reservation, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.table(reservation);
    setReservation(initialValue);
  };

  return (
    <div className='container'>
      <h2>React form</h2>
      <form>
        <div className='form-group'>
          <label htmlFor='firstName'>First Name:</label>
          <input
            className='form-control'
            id='firstName'
            name='firstName'
            type='text'
            value={reservation.firstName}
            onChange={handleChange}
            placeholder='First Name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            className='form-control'
            id='lastName'
            name='lastName'
            type='text'
            value={reservation.lastName}
            onChange={handleChange}
            placeholder='Last Name'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input
            className='form-control'
            id='email'
            name='email'
            type='email'
            value={reservation.email}
            onChange={handleChange}
            placeholder='Email'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='phone'>Phone:</label>
          <input
            className='form-control'
            id='phone'
            name='phone'
            type='text'
            value={reservation.phone}
            onChange={handleChange}
            placeholder='Phone Number'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='street'>Street:</label>
          <input
            className='form-control'
            id='street'
            name='street'
            type='text'
            value={reservation.street}
            onChange={handleChange}
            placeholder='Street'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='city'>City:</label>
          <input
            className='form-control'
            id='city'
            name='city'
            type='text'
            value={reservation.city}
            onChange={handleChange}
            placeholder='City'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='zip'>Zip Code:</label>
          <input
            className='form-control'
            id='zip'
            name='zip'
            type='text'
            value={reservation.zip}
            onChange={handleChange}
            placeholder='Zip Code'
          />
        </div>
        <div className='form-group'>
          <label htmlFor='country'>Country:</label>
          <input
            className='form-control'
            id='country'
            name='country'
            type='text'
            value={reservation.country}
            onChange={handleChange}
            placeholder='Country'
          />
        </div>
        <div className='form-group form-check'>
          <label className='form-check-label' htmlFor='payBy'>
            <input
              className='form-check-input'
              id='payBy'
              name='payByCreditCard'
              type='checkbox'
              checked={reservation.payByCreditCard}
              onChange={handleChange}
            />
            Pay By Credit Card
          </label>
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <br />
      <p>{JSON.stringify(reservation)}</p>
    </div>
  );
}
export default ReservationForm;
