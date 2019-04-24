import React from 'react';
import PropTypes from 'prop-types';

class DefaultErrorBoundary extends React.Component {
  constructor() {
    super();
    this.state = {
      isError: false
    };
  }

  static getDerivedStateFromError() {
    return { isError: true };
  }

  render() {
    const { isError } = this.state;
    const { children } = this.props;

    if (isError) {
      return <div>Something Went Wrong</div>;
    }
    return children;
  }
}

DefaultErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired
};

export default DefaultErrorBoundary;
