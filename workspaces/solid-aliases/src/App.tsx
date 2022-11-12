import type { Component } from 'solid-js';

import styles from './assets/styles.module.css';
import { Header } from '@pages';

const App: Component = () => {
  return (
    <div class={styles.App}>
      <Header />
    </div>
  );
};

export default App;
