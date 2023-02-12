// *********************************************************************************************************
// after adding filter
import './css/Players.css';
import Card from '../UI/Card';
import DisplayPlayer from './DisplayPlayer';
import PlayerFilter from './PlayerFilter';
import { useState } from 'react';

const Players = (props) => {
  const [dropVal, setDropVal] = useState('GK');

  const dropHandler = (data) => {
    // *******************************************
    // (2) getting data from PlayerFilter.js
    // *******************************************
    // console.log('INSIDE PLAYERS');
    // console.log(data);
    setDropVal(data);
    console.log('The dropval is' + data);
  };

  // *******************************************
  // (3) filter player records based on the drop down val that we
  // imported recently above
  // *******************************************
  const filteredData = props.stats.filter((data) => {
    return data.position === dropVal;
  });
  // console.log('output of filteredData' + filteredData);

  // ********************************
  // (4)If the filtered list is empty then what to render
  // ********************************
  let refinedOp = (
    <h2 style={{ color: 'red', textAlign: 'center' }}>No entry found!!!</h2>
  );
  if (filteredData.length > 0) {
    refinedOp = filteredData.map((stat) => (
      <DisplayPlayer
        key={stat.id}
        name={stat.playerName}
        position={stat.position}
      />
    ));
  }

  // console.log(props.stats);
  // *******************************************
  // (1) getting data from app.js
  // *******************************************
  return (
    <div>
      <Card className='expenses'>
        <PlayerFilter selected={dropVal} onSelectedDrop={dropHandler} />
        {refinedOp}
      </Card>
    </div>
  );
};

export default Players;

// *********************************************************************************************************
// below adding filter
// import './css/Players.css';
// import Card from '../UI/Card';
// import DisplayPlayer from './DisplayPlayer';
// const Players = (props) => {
//   // console.log(props.stats);
//   // *******************************************
//   // (1) getting data from app.js
//   // *******************************************
//   return (
//     <div>
//       <Card className='expenses'>
//         {props.stats.map((stat) => (
//           <DisplayPlayer
//             key={stat.id}
//             name={stat.playerName}
//             position={stat.position}
//           />
//         ))}
//       </Card>
//     </div>
//   );
// };

// export default Players;
