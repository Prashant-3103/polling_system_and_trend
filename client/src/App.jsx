import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import RegisterPage from './pages/register/RegisterPage';
import VoterList from './pages/users/VoterList';

function App() {
  return (
    <div className='App'>

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route  path='/register' element={<RegisterPage/>}/>
          <Route  path='/voters' element={<VoterList/>}/>
        </Routes>

    </div>
  );
}

export default App;
