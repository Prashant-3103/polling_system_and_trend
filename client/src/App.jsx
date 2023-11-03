import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import VoterList from './pages/users/VoterList';
import { Line } from 'react-chartjs-2';

function App() {
  return (
    <div className='App'>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route  path='/register' element={<RegisterPage/>}/>
          <Route  path='/voters' element={<VoterList/>}/>

          <Route  path='/line' element={<Line/>}/>
        </Routes>

    </div>
  );
}

export default App;
