import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './Component/Data';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Signin from './Component/Signin';
import ProfileJ from './Component/jobseeker/components/ProfileJ';

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
        <Route path='/profilej' element={<ProfileJ />} />
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
