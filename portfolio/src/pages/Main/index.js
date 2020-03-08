import React, { Component } from 'react';

import About from '../../components/About/index';
import Resume from '../../components/Resume/index';
import Jobs from '../../components/Jobs/index';

export default class Main extends Component {
  render() {
    return (
      <>
        <About />
        <Resume />
        <Jobs />
      </>
    );
  }
}
