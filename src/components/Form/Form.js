import './Form.scss';
import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleSubmit = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    const method = event.target.method.value;
    const body = event.target.body.value;
    if (method === 'GET') {
      this.props.toggle();
      const raw = await fetch(url);
      const response = await raw.json();
      this.props.handleResult({
        header: { Content_Type: raw.headers.get('Content-Type') },
        count: response.count,
        results: response,
      });
      this.props.storage({ url, method, response });
      this.props.toggle();
    } else {
      this.props.toggle();
      const raw = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
      });
      const response = await raw.json();
      this.props.handleResult({
        header: { Content_Type: raw.headers.get('Content-Type') },
        count: response.count,
        results: response,
      });
      this.props.storage({ url, method, response });
      this.props.toggle();
    }
  };
  componentDidMount() {
    if (this.props.historyStorage) {
      let input = document.getElementById(this.props.historyStorage.method);
      input.checked = true;
    }
  }
  componentDidUpdate() {
    if (this.props.api.method !== '') {
      console.log('true', this.props.api);
      let input = document.getElementById(this.props.api.method);
      input.checked = true;
    }
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="url">
          url:
          <input
            type="url"
            name="url"
            id="url"
            defaultValue={this.props.api.url || this.props.historyStorage?.url}
            required
          />
        </label>
        <button type="submit">Go!</button>
        <br />
        <label htmlFor="method">
          GET
          <input
            type="radio"
            name="method"
            id="GET"
            value="GET"
            defaultChecked
          />
        </label>

        <label htmlFor="method">
          POST
          <input type="radio" name="method" id="POST" value="POST" />
        </label>
        <label htmlFor="method">
          PUT
          <input type="radio" name="method" id="PUT" value="PUT" />
        </label>

        <label htmlFor="method">
          DELETE
          <input type="radio" name="method" id="DELETE" value="DELETE" />
        </label>
        <label htmlFor="body">
          <textarea name="body" id="body" cols="30" rows="10"></textarea>
        </label>
      </form>
    );
  }
}

export default Form;
