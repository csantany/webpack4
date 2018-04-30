// Dependencies
import React from 'react';
import { element } from 'prop-types';

// Components
import Home from './Home';

// Shared components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';

// Styles
import styles from './App.scss';

const App = props => (
  <div className={styles.App}>
    <Header title="Webpack 4" />

    <Content>
      <Home />
    </Content>

    <Footer />
  </div>
);

App.propTypes = {
  children: element
};

export default App;
