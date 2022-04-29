import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';

import NAvigationBar from './Pages/Shared/Navbar/NAvigationBar';
import SignUp from './Pages/Login/SignUp/SignUp'
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import SingleItem from './Pages/SingleItem/SingleItem';
import RequireAuth from './RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';

function App() {
  return (
    <div>
      <NAvigationBar></NAvigationBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/singleitem/:Id' element={<RequireAuth>
          <SingleItem></SingleItem>
        </RequireAuth>}></Route>
        <Route path='/manageitems' element={<ManageItems></ManageItems>}></Route>
      </Routes>
    </div>
  );
}

export default App;
