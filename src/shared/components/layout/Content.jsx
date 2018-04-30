import React from 'react';
import PropTypes from 'prop-types';
import styles from './Content.scss';

const Content = props => {
  const { children } = props;

  return (
    <main className={styles.Content}>
      {children}
    </main>
  );
};

Content.propTypes = {
  children: PropTypes.element.isRequired
};

export default Content;
