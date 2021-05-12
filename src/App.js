import ChallengeSection from './components/ChallengeSection';
import Footer from './components/Footer';
import Landing from './components/Landing';
import Navbar from './components/Navbar';
import React from 'react';
import './style.css';
import { SAMPLE_PARAGRAPHS } from './data/sampleParagraph';

const TotalTime = 60;
const serviceURL = 'http://metaphorpsum.com/paragraphs/1/10';
const defaultState = {
  selectedParagraph: '',
  timerStarted: false,
  timeRem: TotalTime,
  words: 0,
  characters: 0,
  wpm: 0,
  testInfo: [],
};

class App extends React.Component {
  state = defaultState;
  fetchSampleParagraph = () => {
    const data =
      SAMPLE_PARAGRAPHS[Math.floor(Math.random() * SAMPLE_PARAGRAPHS.length)];
    const selParaArray = data.split('');
    const testInfo = selParaArray.map((selectedLetter) => {
      return {
        testLetter: selectedLetter,
        status: 'notAttempted',
      };
    });
    this.setState({
      ...defaultState,
      testInfo: testInfo,
      selectedParagraph: data,
    }); //this.setState({testInfo}) used when name of key and value are same
  };
  fetchNewParagraph = () => {
    fetch(serviceURL)
      .then((response) => response.text())
      .then((data) => {
        const selParaArray = data.split('');
        const testInfo = selParaArray.map((selectedLetter) => {
          return {
            testLetter: selectedLetter,
            status: 'notAttempted',
          };
        });
        this.setState({
          ...defaultState,
          testInfo: testInfo,
          selectedParagraph: data,
        }); //this.setState({testInfo}) used when name of key and value are same
      });
  };
  componentDidMount() {
    this.fetchSampleParagraph();
  }
  startAgain = () => this.fetchSampleParagraph();

  startTimer = () => {
    this.setState({ timerStarted: true });
    const timer = setInterval(() => {
      if (this.state.timeRem > 0) {
        const timespent = TotalTime - this.state.timeRem;
        const wpm =
          timespent > 0 ? (this.state.words / timespent) * TotalTime : 0;
        this.setState({
          timeRem: this.state.timeRem - 1,
          wpm: parseInt(wpm),
        });
      } else clearInterval(timer);
    }, 1000);
  };

  handleUSerInput = (InputValue) => {
    if (!this.state.timerStarted) this.startTimer();
    const characters = InputValue.length;
    const words = InputValue.split(' ').length;
    const index = characters - 1;

    //  * 1. Handle the underflow case - all characters should be shown as not-attempted
    if (index < 0) {
      this.setState({
        testInfo: [
          {
            testLetter: this.state.testInfo[0].testLetter,
            status: 'notAttempted',
          },
          ...this.state.testInfo.slice(1),
        ],
        characters,
        words,
      });
      return;
    }
    //  * 2. Handle the overflow case - early exit
    if (index >= this.state.selectedParagraph.length) {
      this.setState({
        characters,
        words,
      });
      return;
    }
    //  * 3. Handle the backspace case
    //  *      - Mark the [index+1] element as notAttempted
    //  *        (irrespective of whether the index is less than zero)
    //  *      - But, don't forget to check for the overflow here
    //  *        (index + 1 -> out of bound, when index === length-1)
    const testInfo = this.state.testInfo;
    if (!(index === this.state.selectedParagraph.length - 1))
      testInfo[index + 1].status = 'notAttempted';
    // check entered character is right or wrong
    const isCorrect = InputValue[index] === testInfo[index].testLetter;
    //  * 4. Update the status in test info
    //  *      1. Find out the last character in the inputValue and it's index
    //  *      2. Check if the character at same index in testInfo (state) matches
    //  *      3. Yes -> Correct
    //  *         No  -> Incorrect (Mistake++)
    testInfo[index].status = isCorrect ? 'correct' : 'incorrect';
    //  * 5. Irrespective of the case, characters, words and wpm can be updated
    this.setState({
      testInfo,
      words,
      characters,
    });
  };

  render() {
    return (
      <div className='app'>
        <Navbar />
        <Landing />
        <ChallengeSection
          selectedParagraph={this.state.selectedParagraph}
          words={this.state.words}
          characters={this.state.characters}
          wpm={this.state.wpm}
          timeRem={this.state.timeRem}
          timerStarted={this.state.timerStarted}
          testInfo={this.state.testInfo}
          onInputChange={this.handleUSerInput}
          onStartAgain={this.startAgain}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
