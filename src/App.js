import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Data from './Component/Data';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Signin from './Component/Signin';

function App() {
  return (
    <>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/data' element={<Data />} />
        <Route path='/signin' element={<Signin />} />
      </Routes>
      </BrowserRouter>
    </>
    // <div>
    //   <Home />
    //   {/* <Signup /> */}
    // </div>
  );
}

export default App;
