import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/nav-bar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CalculationPage from './pages/CalculationPage';

const App = () => {
  return (
    <BrowserRouter>
      <header style={{ height: '14vh'}} >
        <NavBar />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4>Calculator</h4>
              <ul>
                <li><a href="/about">About</a></li>
                <li><a href="/calculator">Calculator</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Help</h4>
              <ul>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
