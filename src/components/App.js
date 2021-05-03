import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './Form';
import Result from './Result.js';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, results: [], header: {} };
    this.handleResult = this.handleResult.bind(this);
  }
  handleResult(response) {
    this.setState({ ...response });
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Form handleResult={this.handleResult} />
          <Result data={this.state} />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
