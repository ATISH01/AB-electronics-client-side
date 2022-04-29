import logo from './logo.svg';
import './App.css';
import Banner from './Pages/Home/Banner/Banner';

import NAvigationBar from './Pages/Shared/Navbar/NAvigationBar';
import Products from './Pages/Home/Products/Products';
import Home from './Pages/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NAvigationBar></NAvigationBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
