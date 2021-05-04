import './Form.scss';
import React from 'react';

const Form = (props) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = event.target.url.value;
    // const method = event.target.method.value;
    const raw = await fetch(url);
    const response = await raw.json();
    console.log(raw.headers.get('Content-Type'));
    props.handleResult({
      header: { Content_Type: raw.headers.get('Content-Type') },
      count: response.count,
      results: response,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="url">
        url:
        <input type="text" name="url" id="url" />
      </label>
      <button type="submit">Go!</button>
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
  );
};

export default Form;
