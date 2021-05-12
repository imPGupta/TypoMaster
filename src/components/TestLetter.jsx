import React from 'react';
import '../style.css';

const TestLetter = ({ individualLetterInfo }) => {
  const status = individualLetterInfo.status; // const {status}= individualLetterInfo
    
    // Key Value Pair
    const statusClass = {
        correct: 'tl-correct',
        incorrect: 'tl-incorrect',
        notAttempted: 'tl-not-attempted',
    }[status]

//   if (status === 'correct') statusClass = 'tl-correct';
//   else if (status === 'incorrect') statusClass = 'tl-incorrect';
//   else statusClass = 'tl-not-attempted';
  return (
    <span className={`test-letter ${statusClass}`}>
      {individualLetterInfo.testLetter}
    </span>
  );
};

export default TestLetter;
