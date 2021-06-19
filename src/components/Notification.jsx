import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Notification extends Component {

  static defaultProps = { message: '(empty)' };
  static propTypes = {
    message: PropTypes.string.isRequired,
    };
    
    render() {
        const { message } = this.props;
        
     return (
         <div> <p>{message}</p></div>
         
    );
  }
}

export default Notification;