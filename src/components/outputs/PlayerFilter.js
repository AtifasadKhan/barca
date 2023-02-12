import './css/PlayerFilter.css';

const PlayerFilter = (props) => {
  const changeHandler = (event) => {
    // console.log(event.target.value);
    //   ***************************************
    //   sending data to PlayerFilter.js
    //   ***************************************
    props.onSelectedDrop(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by Position</label>
        <select value={props.selected} onChange={changeHandler}>
          <option value='GK'>GK</option>
          <option value='LB'>LB</option>
          <option value='RB'>RB</option>
          <option value='CB'>CB</option>
          <option value='CM'>CM</option>
          <option value='AMF'>AMF</option>
          <option value='LW'>LW</option>
          <option value='RW'>RW</option>
          <option value='ST'>ST</option>
        </select>
      </div>
    </div>
  );
};

export default PlayerFilter;
