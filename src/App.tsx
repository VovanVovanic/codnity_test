import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './modules/Footer';
import Header from './modules/Header';
import Category from './pages/category';
import Details from './pages/details';
import Main from './pages/main';
import store from './redux/store';

function App() {
  const [title, setTitle] = useState<string>("Main Page")
  return (
    <Provider store={store}>
      <BrowserRouter>
        <main className='main'>
          <Header setTitle={setTitle} title={ title} /> 
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/category" element={<Category title={ title} />} />
            <Route path="/details" element={<Details/>} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
