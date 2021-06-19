import React from 'react';
import Statistics from './components/Statistics';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';
class App extends React.Component {

state = {
  good: 0,
  neutral: 0,
  bad: 0,
  };
 

onLeaveFeedback = event => {
    const { name } = event.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  
   
render() {
  const countTotalFeedback = this.state.good + this.state.bad + this.state.neutral;
  const countPositiveFeedbackPercentage = countTotalFeedback > 0 ? this.state.good / countTotalFeedback * 100 : 0;
  const options = Object.keys(this.state);
  
    return (
      
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        {countTotalFeedback > 0 ? (
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={countTotalFeedback} positivePercentage={countPositiveFeedbackPercentage} />)
        :(<Notification message={'No feedback given'} />)}
      </Section>
    );
  
  }
}


export default App;