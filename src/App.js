import NavbarMain from './components/NavbarMain';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import routes from './router/route';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Initialize AOS animations
  AOS.init({
    disable: 'mobile',
    startEvent: 'DOMContentLoaded',
    offset: 70,
    duration: 800,
    once: false,
    mirror: false,
  });

  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <NavbarMain />
        <div className="content">
          <Routes>
            {routes.map((x) => (
              <Route key={x.to} path={x.to} element={x.component} exact />
            ))}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
