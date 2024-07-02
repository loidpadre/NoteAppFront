import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { DashBoard } from './pages/DashBoard/DashBoard';
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/dash' element={<DashBoard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
