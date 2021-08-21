import React from 'react';
import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css"

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={s.feedbackOptions}>
    {options.map(option => (
      <button
        className={s.button}
        type="button"
        data-feedback={option}
        onClick={onLeaveFeedback}
        key={option}
      >
        {option}
      </button>
    ))}
    </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;