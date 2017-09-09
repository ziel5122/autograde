import React from 'react';

import Body from '../Body/body';
import Header from '../Header';
import styles from './styles';

const App = () => (
  <div style={styles.app}>
    <Header />
    <Body />
  </div>
);

export default App;
