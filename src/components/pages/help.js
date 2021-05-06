import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import './help.scss';
const Help = () => {
  return (
    <>
      <Header />
      <div id="help">
        <h1>How To Use The App</h1>
        <p>
          You need to add the link for your API and add the Method. in the Text
          Area add the body of your request if needed.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default Help;
