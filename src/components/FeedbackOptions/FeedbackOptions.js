import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';
class FeedbackOptions extends Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
    };
   render() {
       const { options, onLeaveFeedback } = this.props;
       return (
           <div>
               {options.map(option => {
                   return (
                       <button className={styles.button}
                           key={option}
                           onClick={onLeaveFeedback}
                           name={option}
                       >
                           {option}
                       </button>
                   );
               })}
           </div>
  
    );
  }
}
export default FeedbackOptions;