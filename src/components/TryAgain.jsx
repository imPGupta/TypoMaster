import React from 'react';
import '../style.css';

const TryAgain = ({ words, characters, wpm, onStartAgain }) => {
  return (
    <div className='tryagain-container'>
      <h1>TEST RESULTS!</h1>
      <div className='result-container'>
        <p>
          <b>Characters: </b>
          {characters}
        </p>
        <p>
          <b>Words: </b>
          {words}
        </p>
        <p>
          <b>Speed: </b>
          {wpm} wpm
        </p>
      </div>
      <div>
        <button
          className='end-buttons start-again-btn'
          onClick={() => onStartAgain()}
        >
          Re-try
        </button>
        <button
          className='end-buttons share-btn'
          onClick={() => {
            window.open(
              'https://www.facebook.com/sharer/sharer.php?u=www.codeworld.com/',
              'facebook-share-dialog',
              'width=500, height=500'
            );
          }}
        >
          Share
        </button>
        <button
          className='end-buttons tweet-btn'
          onClick={() => {
            window.open(
              'https://twitter.com/intent/tweet?text=www.codeworld.com/',
              'Twitter',
              'width=500, height=500'
            );
          }}
        >
          Tweet
        </button>
      </div>
    </div>
  );
};

export default TryAgain;
