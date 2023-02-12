import PlayerForm from './PlayerForm';
import './css/NewPlayer.css';
// *************************
// data from PlayerForm.js
// *************************
// we did below to add new id
const NewPlayer = (props) => {
  const saveDataHandler = (dataFromPlayerForm) => {
    const finalRecordedInput = {
      id: parseInt(Date.now() * Math.random()),
      ...dataFromPlayerForm,
    };

    // *************************
    // transfering data to app.js to add it to op as it is the only way
    //   remember the video
    //          app.js
    //          |   |
    //        i/p   o/p
    // so transfering i/p to o/p we need app.js
    // *************************
    props.onAddPlayer(finalRecordedInput);
    // console.log(finalRecordedInput);
  };
  return (
    <div className='new-expense'>
      <PlayerForm onSavePlayerForm={saveDataHandler} />
    </div>
  );
};

export default NewPlayer;
