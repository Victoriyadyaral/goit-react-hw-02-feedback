import React from 'react';
import { ImHappy, ImNeutral, ImSad, ImCalculator } from "react-icons/im";
import PropTypes from "prop-types";

import Notification from '../notification/Notification';

const Statistics = ({
    good,
    neutral,
    bad,
    total,
    positivePercentage,
}) => ( 
  <>
    {total > 0 ? 
   (<ul>
          <li><ImHappy /> -- Good:   {good}</li>
          <li><ImNeutral /> -- Neutral:  {neutral}</li>
          <li><ImSad /> -- Bad:   {bad}</li>
          <li><ImCalculator /> -- Total:   {total}</li>
          <li>Positive feedback:   {positivePercentage}%</li>
    </ul>) 
    :
    ( <Notification message="No feedback given" />)
    }
  </>
  );

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;