import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { useAppSelector } from './hooks/redux';

import Layout from './components/Layout/Layout';
import TopSales from './components/TopSales/TopSales';
import Catalog from './components/Catalog/Catalog';
import About from './components/About/About';
import Contacts from './components/Contacts/Contacts';
import SearchForm from './components/SearchForm/SearchForm';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Cart from './components/Cart/Cart';
import Notfound from './components/Notfound/Notfound';

import './App.css';

function App() {
  const { isActive } = useAppSelector((state) => state.details);

  return (
    <BrowserRouter
      basename={
        process.env.NODE_ENV === 'production'
          ? '/react_diploma_online-shoe-store/'
          : '/'
      }
    >
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <TopSales />
                <Catalog />
              </>
            }
          />
          <Route
            path="/catalog"
            element={<Catalog children={<SearchForm />} />}
          />
          {isActive && (
            <Route path="/catalog/:id" element={<ProductDetails />} />
          )}
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/*" element={<Notfound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
