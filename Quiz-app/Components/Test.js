import React, { useContext, useEffect, useState } from 'react';
import QuestionsData from '../Data/QuestionData';
import { DataContext } from '../App';

const Test = () => {
  const { setappState } = useContext(DataContext);
  const [current, setCurrent] = useState(0); //-->ระบุหน้าtest
  const [select, setSelect] = useState('');
  const { scoreState, setscoreState } = useContext(DataContext);

  useEffect(() => {
    CheckAnswer();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [select]);

  const CheckAnswer = () => {
    if (select !== '') {
      if (select === QuestionsData[current].answer) {
        setscoreState(scoreState + 1);
      } else {
        console.log('false');
      }
      setCurrent(current + 1);
      if (current === QuestionsData.length - 1) {
        setappState('score');
      }
    }
  };

  return (
    <div className="test">
      <h1>{QuestionsData[current].question}</h1>
      <div className="choice">
        <button
          onClick={() => {
            setSelect('A');
          }}
        >
          {QuestionsData[current].A}
        </button>
        <button
          onClick={() => {
            setSelect('B');
          }}
        >
          {QuestionsData[current].B}
        </button>
        <button
          onClick={() => {
            setSelect('C');
          }}
        >
          {QuestionsData[current].C}
        </button>
        <button
          onClick={() => {
            setSelect('D');
          }}
        >
          {QuestionsData[current].D}
        </button>
      </div>
      <p>
        {current + 1}/{QuestionsData.length}
      </p>
    </div>
  );
};

export default Test;
