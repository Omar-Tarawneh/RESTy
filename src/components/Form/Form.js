import './Form.scss';
import React from 'react';

const Form = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    const method = event.target.method.value;
    const body = event.target.body.value;
    if (method === 'GET') {
      props.toggle();
      const raw = await fetch(url);
      const response = await raw.json();
      props.handleResult({
        header: { Content_Type: raw.headers.get('Content-Type') },
        count: response.count,
        results: response,
      });
      props.storage({ url, method, response });
      props.toggle();
    } else {
      props.toggle();
      const raw = await fetch(url, {
        method: method,
        body: JSON.stringify(body),
      });
      const response = await raw.json();
      props.handleResult({
        header: { Content_Type: raw.headers.get('Content-Type') },
        count: response.count,
        results: response,
      });
      props.storage({ url, method, response });
      props.toggle();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">
        url:
        <input type="text" name="url" id="url" defaultValue={props.api.url} />
      </label>
      <button type="submit">Go!</button>
      <br />
      <label htmlFor="method">
        GET
        {props.api.method === 'GET' ? (
          <input
            type="radio"
            name="method"
            id="GET"
            value="GET"
            checked={true}
          />
        ) : (
          <input type="radio" name="method" id="GET" value="GET" />
        )}
      </label>

      <label htmlFor="method">
        POST
        {props.api.method === 'POST' ? (
          <input
            type="radio"
            name="method"
            id="POST"
            value="POST"
            checked={props.api.method === 'POST'}
          />
        ) : (
          <input type="radio" name="method" id="POST" value="POST" />
        )}
      </label>
      <label htmlFor="method">
        PUT
        {props.api.method === 'PUT' ? (
          <input
            type="radio"
            name="method"
            id="PUT"
            value="PUT"
            checked={true}
          />
        ) : (
          <input type="radio" name="method" id="PUT" value="PUT" />
        )}
      </label>

      <label htmlFor="method">
        DELETE
        {props.api.method === 'DELETE' ? (
          <input
            type="radio"
            name="method"
            id="DELETE"
            value="DELETE"
            checked={true}
          />
        ) : (
          <input type="radio" name="method" id="DELETE" value="DELETE" />
        )}
      </label>
      <label htmlFor="body">
        <textarea name="body" id="body" cols="30" rows="10"></textarea>
      </label>
    </form>
  );
};

export default Form;
