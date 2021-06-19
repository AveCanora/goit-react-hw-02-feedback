import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  static defaultProps = { title: '(empty)' };
  static propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element),
  };
  render() {
    const { title, children } = this.props;

    return (
      <section>
        <h1>{title}</h1>
        {children}
      </section>
    );
  }
}

export default Section;