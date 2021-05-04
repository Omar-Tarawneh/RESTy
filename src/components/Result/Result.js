import ReactJson from 'react-json-view';
import { If, Else, Then } from '../If/index';
import './Result.scss';
function Result({ data, loading }) {
  return (
    <div id="result">
      <If condition={loading}>
        <Then>
          <div>Loading... </div>
        </Then>
        <Else>
          <ReactJson name={false} src={data} theme="rjv-default" />
        </Else>
      </If>
    </div>
  );
}

export default Result;
