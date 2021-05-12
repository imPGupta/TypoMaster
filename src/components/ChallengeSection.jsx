import React from 'react';
import '../style.css';
import TestContainer from './TestContainer';

const ChallengeSection = ({
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
    <div className='challenge-conatiner'>
      <div data-aos='fade-down' className='challenge-header'>
        TAKE A SPEED TEST NOW!
      </div>
      <TestContainer
        testInfo={testInfo}
        selectedParagraph={selectedParagraph}
        words={words}
        characters={characters}
        wpm={wpm}
        timeRem={timeRem}
        timerStarted={timerStarted}
        onStartAgain={onStartAgain}
        onInputChange={onInputChange}
      />
    </div>
  );
};

export default ChallengeSection;
