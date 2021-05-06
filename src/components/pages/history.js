import React from 'react';
import ReactJson from 'react-json-view';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { If, Then, Else } from '../If';
import './history.scss';

class HistoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      storage: {},
      data: false,
    };
    this.showData = this.showData.bind(this);
  }

  showData(key) {
    let data = this.state.storage[key].response;
    this.setState({ data });
  }
  // when the page is rendered if there is data in the local storage set them.
  componentDidMount() {
    let calls = JSON.parse(localStorage.getItem('api calls'));
    calls && this.setState({ storage: calls }); // if there is something in the localstorage if true set state else do nothing.
  }

  render() {
    return (
      <>
        <Header />
        <section id="historyPage">
          <aside>
            {Object.keys(this.state.storage).map((key, index) => (
              <div
                key={key}
                className="calls"
                onClick={() => this.showData(index)}
              >
                <span className="method">{this.state.storage[key].method}</span>{' '}
                {this.state.storage[key].url}
                <button
                  onClick={() =>
                    this.props.history.push('/', {
                      method: this.state.storage[key].method,
                      url: this.state.storage[key].url,
                    })
                  }
                >
                  re-run
                </button>
              </div>
            ))}
          </aside>
          <div id="result">
            <If condition={!this.state.data}>
              <Then>
                <div>Click on Url to show your Data... </div>
              </Then>
              <Else>
                <ReactJson
                  name={false}
                  src={this.state.data}
                  theme="rjv-default"
                />
              </Else>
            </If>
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default HistoryPage;
