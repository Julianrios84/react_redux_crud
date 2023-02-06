import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductCreate from './components/ProductCreate';
import ProductUpdate from './components/ProductUpdate';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header />
        <div className="container mt-5">
          <Routes>
            <Route exact path="/" element={<ProductList/>} />
            <Route exact path="/product/create" element={<ProductCreate/>} />
            <Route exact path="/product/update/:id" element={<ProductUpdate/>} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
