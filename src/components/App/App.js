import './App.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Form from '../Form/Form';
import Result from '../Result/Result';
import History from '../History/History';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
      header: {},
      callback: { url: '', method: '' },
      history: JSON.parse(localStorage.getItem('api calls')) || [],
      loading: false,
    };

    this.handleResult = this.handleResult.bind(this);
    this.toggleLoading = this.toggleLoading.bind(this);
    this.historyStorage = this.historyStorage.bind(this);
    this.callback = this.callback.bind(this);
  }
  toggleLoading() {
    this.setState({ loading: !this.state.loading });
  }
  handleResult(response) {
    this.setState({ ...response });
  }
  historyStorage(call) {
    let arr = this.state.history.filter((el) => {
      return call.method === el.method && call.url === el.url;
    });
    if (!arr.length) {
      this.setState({ history: [...this.state.history, call] });
      localStorage.setItem('api calls', JSON.stringify(this.state.history));
    }
  }
  callback(api) {
    this.setState({ callback: api });
  }
  render() {
    return (
      <div>
        <Header />
        <main>
          <Form
            handleResult={this.handleResult}
            toggle={this.toggleLoading}
            storage={this.historyStorage}
            api={this.state.callback}
            historyStorage={this.props.location?.state}
          />
          <div id="result-aside">
            <aside>
              <History calls={this.state.history} callback={this.callback} />
            </aside>
            <Result
              data={{ ...this.state, history: [] }}
              loading={this.state.loading}
            />
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
