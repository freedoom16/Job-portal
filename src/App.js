import { BrowserRouter, Route, Routes}from 'react-router-dom';
import './App.css';
import Data from './Component/Data';
import Home from './Component/Home';
import Signup from './Component/Signup';
import Navbar from './Component/Navbar';
import Signin from './Component/Signin';
import Profilej from './Component/jobseeker/ProfileJ';
import Employer from './Component/Employer/Employer';
import Post from './Component/Employer/component/Post'
import View from './Component/Employer/component/View'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <div>
    <BrowserRouter>
    <AuthProvider>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/data' element={<Data />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/profilej' element={<Profilej />} />
          <Route path='/employer' element={<Employer />} />
          <Route path='/employer/post' element={<Post />} />
          <Route path='/employer/view' element={<View />} />
        </Routes>
    </AuthProvider>
    </BrowserRouter>
    </div>
    // <div>
    //   <Home />
    //   {/* <Signup /> */}
    // </div>
  );
}

export default App;
