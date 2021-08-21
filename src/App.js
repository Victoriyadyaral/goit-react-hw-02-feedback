//import './App.css';
import React, { Component } from 'react';

import Container from './components/container/Container';
import Statistics from './components/statistics/Statistics';
import FeedbackOptions from './components/feedbackOptions/FeedbackOptions';
import Section from './components/section/Section';

const options = ['good', 'neutral', 'bad'];

class App extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = ({target}) => {
    const {feedback} = target.dataset;
    this.setState(prevState => {
      return { [feedback]: prevState[feedback] + 1 };
    });
  };
  
  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    let total = this.countTotalFeedback();
    return total ? Math.round((this.state.good / total) * 100) : 0;
  };

 
  render() {
    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedbackPercentage = this.countPositiveFeedbackPercentage();

    return (
     <Container>
        <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.handleFeedback}
        />
        </Section>
        <Section title={'Statistics'}>
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positiveFeedbackPercentage}
        />
        </Section>
     </Container>
    );
  }
}

export default App;
