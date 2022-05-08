import './App.css';
import SignUp from './Pages/Login/SignUp/SignUp'
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import SingleItem from './Pages/SingleItem/SingleItem';
import RequireAuth from './RequireAuth/RequireAuth';
import ManageItems from './Pages/ManageItems/ManageItems';
import AddItems from './Pages/AddItems/AddItems';
import MyItems from './Pages/MyItems/MyItems';
import UpdateProfile from './Pages/Login/UpdateProfile/UpdateProfile';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import ResetPassword from './Pages/Login/ResetPassword/ResetPassword';
import Blogs from './Pages/Blogs/Blogs';
import NotfoundPage from './Pages/404page/NotfoundPage';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='/singleitem/:Id' element={<RequireAuth>
          <SingleItem></SingleItem>
        </RequireAuth>}></Route>
        <Route path='/manageitems' element={<RequireAuth>
          <ManageItems></ManageItems>
        </RequireAuth>}></Route>
        <Route path='/additems' element={<RequireAuth>
          <AddItems></AddItems>
        </RequireAuth>}></Route>
        <Route path='/myitem' element={<RequireAuth>
          <MyItems></MyItems>
        </RequireAuth>}></Route>
        <Route path='/username' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='*' element={<NotfoundPage></NotfoundPage>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
