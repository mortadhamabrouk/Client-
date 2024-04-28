
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login' ;
import Navbar from './components/Navbar';
import Register from './components/Register';
import Profile from './components/Profile';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </>
  );
}

export default App;
