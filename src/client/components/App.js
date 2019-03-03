import React, { Component } from 'react';
import {connect} from 'react-redux';
import {autoBind} from '../utils/helpers';

import * as api from '../services/api.js';

import Header from './Header';
import Tips from './Tips';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    autoBind(this);

    this.state = {
      callform: {
        numberInput: '+4799999999',
        buttonDisabled: false,
      },
      phoneScreen: {
          message: '',
          status: 'disconnected',
      },
    };
  }

  componentDidMount() {
    this.handleStatusChange();
  }

  handleInitiateCall() {
    api.initiateCall({number: this.state.callform.numberInput});
  }

  handleStatusChange() {
    api.onStatusChange((message) => {
      switch (message.type) {

        case 'initiating':
          this.setState({
            ...this.state,
            phoneScreen: {
              ...this.state.phoneScreen,
              status: message.type,
              message: '',
            }
          });
          break;

        case 'calling':
          this.setState({
            ...this.state,
            phoneScreen: {
              ...this.state.phoneScreen,
              status: message.type,
              message: '',              
            }
          });
          break;          
      
        case 'connected':
          this.setState({
            ...this.state,
            phoneScreen: {
              ...this.state.phoneScreen,
              status: message.type,
              message: '',              
            }
          });
          break;   
          
        case 'disconnected':
          this.setState({
            ...this.state,
            phoneScreen: {
              ...this.state.phoneScreen,
              status: message.type,
              message: '',
            }
          });
          break;            

        default:
          break;
      }
    })
  }

  handleUpdateNumberInput(event) {
    this.setState({
      ...this.state,
      callform: {
        ...this.state.callform,
        numberInput: event.target.value,
      }
    });
  }

  render() {
    const {
      callform: {
        numberInput,
        buttonDisabled,
      } = {},
      phoneScreen: {
        status,
      } = {},
    } = this.state;

    const phoneClass = '';

    return (
      <div className="App">

        <Header />

        <div>
          <input value={numberInput} onChange={this.handleUpdateNumberInput} type="tel" /><br />
          <button disabled={buttonDisabled} onClick={this.handleInitiateCall}>Ring meg</button>
        </div>

        <Tips />

        <div className={`phone ${status}`}>
          <h2>Status: {status}</h2>
          <p>Nummer: {numberInput}</p>
        </div>
      </div>
    );
  }
}

export default App;

// function mapStateToProps(state) {
//   return state;
// }

// const withReduxStateAsProps = connect(mapStateToProps);

// const ConnectedApp = withReduxStateAsProps(App)

// export default ConnectedApp;
