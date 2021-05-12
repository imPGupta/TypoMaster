import React from 'react';
import '../style.css';
import DetailCard from './DetailCard';
import TypingChallenge from './TypingChallenge';

const TypingContainer = ({
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
    <div className='typing-container'>
      <div className='details-container'>
        <DetailCard cardName='Words' cardValue={words} />
        <DetailCard cardName='Characters' cardValue={characters} />
        <DetailCard cardName='WPM' cardValue={wpm} />
      </div>
      <div className='writing-container'>
        <TypingChallenge
          testInfo={testInfo}
          selectedParagraph={selectedParagraph}
          onInputChange={onInputChange}
          words={words}
          characters={characters}
          wpm={wpm}
          timeRem={timeRem}
          timerStarted={timerStarted}
          startAgain={startAgain}
        />
      </div>
    </div>
  );
};

export default TypingContainer;
