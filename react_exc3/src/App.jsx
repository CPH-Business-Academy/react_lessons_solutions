import { useState } from 'react';
import ReservationForm from './components/ReservationForm';
import Persons from './components/Persons';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Persons />
      <br />
      <hr />
      <br />
      <ReservationForm />
    </div>
  );
}

export default App;
