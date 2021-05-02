import './Main.scss';
import React from 'react';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = { method: '', url: '' };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleMethod = this.handleMethod.bind(this);
  }
  handleChange(event) {
    this.setState({ url: event.target.value });
  }
  handleMethod(event) {
    this.setState({ method: event.target.value });
  }
  handleSubmit(event) {
    console.log(
      `form submited method= ${this.state.method} url = ${this.state.url}`
    );
    this.setState({
      method: event.target.method.value,
      url: event.target.url.value,
    });
    event.preventDefault();
  }

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>
            Url:
            <input type="text" name="url" />
          </label>
          <input type="submit" value="GO!" />
          <br />
          <label htmlFor="method">
            GET
            <input type="radio" name="method" id="GET" value="GET" />
          </label>

          <label htmlFor="method">
            PUT
            <input type="radio" name="method" id="PUT" value="PUT" />
          </label>
          <label htmlFor="method">
            UPDATE
            <input type="radio" name="method" id="UPDATE" value="UPDATE" />
          </label>

          <label htmlFor="method">
            DELETE
            <input type="radio" name="method" id="DELETE" value="DELETE" />
          </label>
        </form>
        <div id="textarea">
          <span>
            {this.state.method} {this.state.url}
          </span>
        </div>
      </main>
    );
  }
}

export default Main;
