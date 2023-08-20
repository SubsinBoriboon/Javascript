import React, { useContext } from 'react';
import { DataContext } from '../App';
const Start = () => {
  const { setappState } = useContext(DataContext);
  return (
    <div className="start">
      <h1>Start Component</h1>
      <button
        onClick={() => {
          setappState('test');
        }}
      >
        start
      </button>
    </div>
  );
};

export default Start;
