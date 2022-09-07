import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Category from './pages/category';
import Details from './pages/details';
import Main from './pages/main';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main >
          {/* <Header setPageInfo={setPageInfo} /> */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/category" element={<Category />} />
            <Route path="/details" element={<Details/>} />
          </Routes>
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
