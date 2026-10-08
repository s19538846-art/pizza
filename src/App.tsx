import './scss/app.scss';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart.tsx';
import { useState } from 'react';

function App() {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue , "searchValue changed");
  return (
    <>
      <div className="wrapper">
        <Header searchValue={searchValue} setSearchValue={setSearchValue} />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home searchValue={searchValue}  />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
