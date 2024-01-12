
import './App.css';
import LoginSignup from './pages/LoginSignup';
import NavBar from './pages/NavBar';
import Home from './pages/Home';
import Forums from './pages/Forums';
import { Route, Routes } from "react-router-dom"

function App() {

  
  return (
    <>
      <LoginSignup/>

      <NavBar/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forums" element={<Forums />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
