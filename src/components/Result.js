import ReactJson from 'react-json-view';
import './Result.scss';
function Result(props) {
  return (
    <div id="result">
      <ReactJson name={false} src={props.data} theme="rjv-default" />
    </div>
  );
}

export default Result;
