import Card from '../UI/Card';
import './css/DisplayPlayer.css';

const DisplayPlayer = (props) => {
  return (
    // *******************************************
    //(2) getting data from Players.js
    // *******************************************
    <Card className='expense-item'>
      <h2>{props.name}</h2>
      <div className='expense-item__description'>
        <div className='expense-item__price'>{props.position}</div>
      </div>
    </Card>
  );
};

export default DisplayPlayer;
