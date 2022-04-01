import { v4 as uuid } from 'uuid';

const PersonList = ({ persons, editPerson, deletePerson }) => {
  return (
    <div>
      {/* {persons.length === 0 ? <p>Empty List</p> : <p>Full</p>} */}
      {persons.length > 0
        ? persons.map((p, index) => (
            <li key={p.id} className='list-group-item'>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                }}
              >
                {p.name}
                <div style={{ marginLeft: '20px' }}>
                  <a
                    href='xx'
                    onClick={e => {
                      e.preventDefault();
                      editPerson(p, index);
                    }}
                  >
                    edit
                  </a>
                  /
                  <a
                    href='xx'
                    onClick={e => {
                      e.preventDefault();
                      deletePerson(p.id);
                    }}
                  >
                    delete
                  </a>
                </div>
              </div>
            </li>
          ))
        : ''}
    </div>
  );
};

export default PersonList;
