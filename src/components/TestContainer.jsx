import React from 'react';
import '../style.css';
import TryAgain from './TryAgain';
import TypingContainer from './TypingContainer';

const TestContainer = ({
  selectedParagraph,
  testInfo,
  onInputChange,
  words,
  characters,
  wpm,
  timeRem,
  timerStarted,
  onStartAgain,
}) => {
  return (
    <div className='test-container'>
      {timeRem > 0 ? (
        <div className='typing-cont'>
          <TypingContainer
            testInfo={testInfo}
            selectedParagraph={selectedParagraph}
            onInputChange={onInputChange}
            words={words}
            characters={characters}
            wpm={wpm}
            timeRem={timeRem}
            timerStarted={timerStarted}
          />
        </div>
      ) : (
        <div className='try-container'>
          <TryAgain words={words} characters={characters} wpm={wpm} onStartAgain={onStartAgain} />
        </div>
      )}
    </div>
  );
};

export default TestContainer;
