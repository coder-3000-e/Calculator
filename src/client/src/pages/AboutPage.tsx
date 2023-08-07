import './styles.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h1 className="about-title">About Scientific Calculator</h1>
      <p className="about-description">
        Welcome to the Scientific Calculator website! Our calculator is designed
        to provide advanced mathematical functions to help you solve complex
        equations with ease. Whether you're a student, scientist, or anyone in
        need of a reliable calculator, we've got you covered.
      </p>

      <div className="key-features">Key Features:</div>
      <ul className="feature-list">
        <li>Basic arithmetic operations (addition, subtraction, multiplication, and division)</li>
        <li>Exponential functions and square root calculations</li>
        <li>Logarithmic functions</li>
        <li>Cube root and other advanced functionalities</li>
      </ul>
    </div>
  );
};

export default AboutPage;