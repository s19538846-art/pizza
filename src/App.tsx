import './scss/app.scss';
import Header from './components/Header.tsx';
import Home from './pages/Home.tsx';
import NotFound from './pages/NotFound.tsx';
import { Routes, Route } from 'react-router-dom';
import Cart from './pages/Cart.tsx';
import { useState } from 'react';
import { createContext } from 'react';
export const SearchContext = createContext('');

function App()  {
  const [searchValue, setSearchValue] = useState('');
  
  // console.log(SearchContext);
  
  return (
     <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

export default App;
