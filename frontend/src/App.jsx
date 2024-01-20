import './App.css'
import Home from './Pages/Home';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import AboutMe from './Pages/AboutMe';

function App() {
  return (
    <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/AboutMe' element={<AboutMe />} />
          </Routes>
    </Router>
  );
}

export default App