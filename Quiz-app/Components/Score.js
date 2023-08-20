import React, { useContext } from 'react';
import { DataContext } from '../App';

const Score = () => {
  const { scoreState } = useContext(DataContext);
  return (
    <div className="score">
      <h1>Total Scores</h1>
      <h2>{scoreState}/5</h2>
    </div>
  );
};

export default Score;
