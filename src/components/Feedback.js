import React from "react";
// import "./feedback.css";

class Feedback extends React.Component {
  
state = {
  good: 0,
  neutral: 0,
  bad: 0,
  };
  // countTotalFeedback = () => {
  

  // };
  // countPositiveFeedbackPercentage = () => {
    
  // };

  render() {
    return (
      <div className="feedback">
        <h1>Please leave feedback</h1>
          <button className="Good">Good</button>
          <button className="Neutral">Neutral</button>
          <button className="Bad">Bad</button>
        <h1>Statistics</h1>
        <ul className="Statistics">
          <li>Good:{this.state.good}</li>
          <li>Neutral:{this.state.neutral}</li>
          <li>Bad:{this.state.bad}</li>
          <li>Total:</li>
          <li>Positive feedback:</li>
        </ul>
      </div>
    )
  }
}

export default Feedback;
