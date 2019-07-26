import React from 'react';
import logo from './logo.svg';
import './App.css';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; // or 'aws-amplify-react-native';
import {API} from 'aws-amplify';

Amplify.configure(awsconfig);




class App extends React.Component {
  callAmplifyfn = () =>
{
  API.get('books', '/books');
}

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.callAmplifyfn}>Call api</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React 19866666666666
          </a>
        </header>
      </div>
    );
  }
}

export default withAuthenticator(App, true);