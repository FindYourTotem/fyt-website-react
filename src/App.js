import React, { Component } from 'react';
import { FytLogo, CopyPanel, FormPanel, FaqPanel } from './js/components/Bundler';
import './css/index.css';
import './css/main.css';
import './css/normalize.css';

class App extends Component {
  render() {
    return (
      <body>

        <div className="sixtyTwo">
          <FytLogo/>

          <CopyPanel/>
        </div>

        <div className="thirtyEight">
          <FormPanel/>
        </div>

      <div className="faq">
        <FaqPanel/>
      </div>
    </body>
    );
  }
}

export default App;
