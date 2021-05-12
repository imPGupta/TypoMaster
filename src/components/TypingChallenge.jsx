import React from 'react';
import '../style.css';
import TestLetter from './TestLetter';

const TypingChallenge = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timeRem,
  timerStarted,
  startAgain,
}) => {
  return (
    <div className='typing-challenge'>
      <div className='timer-container'>
        <p className='timer'>00:{timeRem > 10 ? timeRem : '0' + timeRem}</p>
        <p className='timer-info'>
          {!timerStarted && 'Start typing to begin the test'}
        </p>
      </div>
      <div className='textarea-container'>
        <div className='textarea-left'>
          <div className='textarea textarea-paragraph'>
            {testInfo.map((individualLetterInfo, index) => {
              return (<TestLetter key={index} individualLetterInfo={individualLetterInfo}/>)
            })}
          </div>
        </div>
        <div className='textarea-right'>
                  <textarea
                      onChange={(e) => onInputChange(e.target.value)}
            className='textarea'
            placeholder='start typing here'
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default TypingChallenge;
