import './css/PlayerForm.css';
import { useState } from 'react';

const PlayerForm = (props) => {
  // ******************for Name*********************
  const [name, changeName] = useState('');
  const nameHandler = (event) => {
    changeName(event.target.value);
    // console.log(name);
  };
  // ******************for Name*********************
  const [position, changePosition] = useState('');
  const positionHandler = (event) => {
    changePosition(event.target.value);
    // console.log(position);
  };
  // ******************for Form*********************
  const handleForm = (event) => {
    event.preventDefault();
    const inputRecorded = {
      playerName: name,
      position: position,
    };
    // ***********************
    // sending the recorded to NewPlayer.js
    // ***********************
    props.onSavePlayerForm(inputRecorded);

    // ********clear ip*********
    changeName('');
    changePosition('');
  };

  return (
    <form action='' onSubmit={handleForm}>
      <div className='new_expense__controls'>
        <div className='new_expense__controls'>
          <h2>Player Details</h2>
          <label htmlFor=''>Name</label>
          <input type='text' value={name} onChange={nameHandler} />
        </div>
        <br />
        <div className='new_expense__controls'>
          <label htmlFor=''>Position</label>
          <input type='text' value={position} onChange={positionHandler} />
        </div>
        <br />
      </div>
      <div className='new_expense__controls'>
        <button>Add Player</button>
      </div>
    </form>
  );
};
export default PlayerForm;
