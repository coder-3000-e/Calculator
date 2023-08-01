import calculatorImage from "../assets/img/calculator.jpg";
import './styles.css';

const HomePage = () => {
  return (
    <div id="home">
      <div
        className="home-content p-5"
        style={{ backgroundImage: `url(${calculatorImage})` }}
      >
        <div className="intro container text-center text-light">
          <h1 className="title">WELCOME</h1>
          <h2 className="sub-title">
            Unleashing the Power of Scientific Computing
          </h2>
          <ul>
            <li><a href="/about" className="button" style={{ cursor: "pointer" }}>About</a></li>
            <li><a href="/contact" className="button" style={{ cursor: "pointer" }}> Contact Us</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default HomePage;