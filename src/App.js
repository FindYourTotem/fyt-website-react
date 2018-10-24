import React, { Component } from 'react';
import { FytLogo, CopyPanel, FormPanel, FaqPanel, ModalAlert } from './js/components/Bundler';
import './css/index.css';
import './css/main.css';
import './css/normalize.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false,
      modalStatus: false,
      modalText: ""
    };

    this.displayModal = this.displayModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  displayModal(modalStatus, modalText) {
    this.setState({
      modalVisible: true,
      modalStatus: modalStatus,
      modalText: modalText
    });
  }

  hideModal() {
    this.setState({modalVisible: false});
  }

  render() {
    return (
      <body>

        { this.state.modalVisible
          ?
          <ModalAlert status={this.state.modalStatus} text={this.state.modalText} hideModal={this.hideModal}/>
          :
          null
        }
        <div className="sixtyTwo">
          <FytLogo/>

          <CopyPanel/>
        </div>

        <div className="thirtyEight">
          <FormPanel displayModal={this.displayModal}/>
        </div>

        <div className="faq">
          <FaqPanel/>
        </div>
      </body>
    );
  }
}

export default App;
