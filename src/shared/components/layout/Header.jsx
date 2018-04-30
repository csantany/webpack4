import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

// We created a component with a simple arrow function.
const Header = props => {
  const {
    title = 'Welcome to React'
  } = props;

  return (
    <header className={styles.Header}>
      <h1>{title}</h1>
    </header>
  );
};

// Even with Functional Components we are able to validate our PropTypes.
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
