import React, { Component } from 'react';

class Feedback extends Component {
  static defaultProps = {
    total: 0,
    positiveFeedbackPercentage: 0,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleFeedback = (event) => {
    if (event.target.innerText === 'Good') {
      this.setState(prevState => ({
        good: prevState.good + 1, 
    }))
    }

    else if (event.target.innerText === 'Neutral') {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1,
    }))
    }
    
    else if (event.target.innerText === 'Bad') {
      this.setState(prevState => ({
        bad: prevState.bad + 1,
    }))
    }
  };
  
  countTotalFeedback = () => {
    return this.total = this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return this.positiveFeedbackPercentage = Math.round((this.state.good / this.total) * 100);
  };

 
  render() {
    const { good, neutral, bad} = this.state;

    return (
      <div className="Feedback">
            <h2>Please leave feedback</h2>
            <div className="Feedback__controls">
            <button type="button" onClick = {this.handleFeedback}>Good</button>
            <button type="button" onClick = {this.handleFeedback}>Neutral</button>
            <button type="button" onClick = {this.handleFeedback}>Bad</button>
            </div>

            <h2>Statistics</h2>
            <ul>
          <li>Good:   {good}</li>
          <li>Neutral:  {neutral}</li>
          <li>Bad:   {bad}</li>
          <li>Total:   {this.countTotalFeedback()}</li>
          <li>Positive feedback:   {this.total > 0 ? this.countPositiveFeedbackPercentage() : 0}%</li>
            </ul>

        {/* <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        /> */}
      </div>
    );
  }
}

export default Feedback;