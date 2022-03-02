import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import PastLaunches from './pages/PastLaunches/PastLaunches';
import Rocket from './pages/Rocket/Rocket';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/launches' element={<PastLaunches />} />
          <Route path='/rocket/:id' element={<Rocket />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
