import { useState, useRef } from 'react';
import PersonList from './PersonList';

const Persons = () => {
  const [persons, setPersons] = useState([]);
  const [name, setName] = useState('');
  const [ids, setIds] = useState(0);
  const [edit, setEdit] = useState(false);
  const [per, setEditPerson] = useState({});
  const inputRef = useRef(null);

  const addHandler = event => {
    const value = document.querySelector('#input').value;
    console.log(value);
    if (value != '') {
      setIds(ids + 1);
      setPersons([...persons, { id: ids, name: name }]);
    }
    inputRef.current.value = '';
  };

  const changeHandler = event => {
    let name = event.target.value;
    console.log(name);
    setName(name);
  };

  const deletePerson = id => {
    console.log(id);
    const update = persons.filter(p => p.id != id);
    setPersons(update);
  };

  const editPerson = (person, index) => {
    inputRef.current.value = person.name;
    person.index = index;
    setEditPerson(person);
    setEdit(true);
  };

  const editHandler = () => {
    const value = inputRef.current.value;

    if (value != per.name) {
      const update = persons;
      per.name = name;
      update.slice(per.index, 1, per);
      setPersons(update);
      setEdit(false);
      inputRef.current.value = '';
    } else {
      setEdit(false);
      inputRef.current.value = '';
    }
  };

  return (
    <div className='container'>
      <h2>Person List</h2>
      <div className='form-group'>
        <label htmlFor='input'>Add a full name</label>
        <input
          id='input'
          ref={inputRef}
          className='form-control'
          onChange={changeHandler}
          placeholder='Add name'
        />
      </div>
      <div id='btn'>
        {edit === false ? (
          <button
            type='submit'
            className='btn btn-primary'
            onClick={addHandler}
          >
            Add Person
          </button>
        ) : (
          <button
            type='submit'
            className='btn btn-primary'
            style={{ backgroundColor: 'green' }}
            onClick={editHandler}
          >
            Edit Person
          </button>
        )}
      </div>
      <br />
      <h4>Basic List Group</h4>
      <ul className='list-group'>
        <PersonList
          persons={persons}
          editPerson={editPerson}
          deletePerson={deletePerson}
        />
      </ul>
    </div>
  );
};

export default Persons;
