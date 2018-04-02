import React from "react";
import ReactDOM from "react-dom";
import styles from './index.scss';

const Index = () => {
  return <div className={styles.some}>Hello React!2</div>;
};

ReactDOM.render(<Index />, document.getElementById("index"));
