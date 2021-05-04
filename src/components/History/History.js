import { If, Then } from '../If';
import './History.scss';

const History = (props) => {
  function UrlValue(e) {
    let [method, url] = e.target.innerText.split(' ');
    props.callback({ method, url });
  }
  return (
    <If condition={props.calls.length}>
      <Then>
        {props.calls.map((data, index) => {
          return (
            <div onClick={UrlValue} key={index} class="history">
              {data.method} {data.url}
            </div>
          );
        })}
      </Then>
    </If>
  );
};

export default History;
