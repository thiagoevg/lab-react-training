import React from 'react';

function NumbersTable(props) {
  let boxList = [];
  for (let i = 0; i < props.limit; i++) {
    boxList.push(
      <div
        className="brick"
        key={i}
        style={{ backgroundColor: (i + 1) % 2 === 0 ? 'red' : 'white' }}
      >
        {i + 1}
      </div>
    );
  }
  return <div className="bricks-container">{boxList}</div>;
}

export default NumbersTable;
