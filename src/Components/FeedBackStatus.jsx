import PropTypes from 'prop-types'
import React from 'react'
import FeedbackContext from '../Context/FeedBackContext';
import { useContext } from 'react';

const FeedBackStatus = () => {
    const {feedback} = useContext(FeedbackContext);

    let average = feedback.reduce((acc,cur) => {
        return acc += cur.rating;
    },0) / feedback.length; 

    if(isNaN(average)) {
        average = 0;
    }

    const styles = {
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "auto",
            width: "500px"
    }
  return (
    <div style={styles}>
        <h1>Reviews: {feedback.length}</h1>
        <h2>average {Math.floor(average*10)/10}</h2>
    </div>
  )
}

FeedBackStatus.defaultProps = {
    average: 0
}


export default FeedBackStatus
