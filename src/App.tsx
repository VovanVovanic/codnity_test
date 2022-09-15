import { Box } from '@material-ui/core';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './modules/Footer';
import Header from './modules/Header';
import Category from './pages/category';
import Details from './pages/details';
import Forms from './pages/forms';
import Main from './pages/main';
import { IbookItem } from './redux/books/types';
import store from './redux/store';

function App() {
  const [title, setTitle] = useState<string>("Main Page")
  const [bookData, setBookData] = useState<IbookItem | undefined | null>(null)
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Box className='wrapper'>
          <Header setTitle={setTitle} title={title} setBookData={setBookData} /> 
          <Box className='main'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/category" element={<Category title={title} setTitle={setTitle} setBookData={setBookData} />} />
              <Route path="/details" element={<Details details={bookData} />} />
              <Route path="/forms" element={<Forms title={title} bookData={bookData} setTitle={setTitle} />} />
            </Routes>
          </Box>
          <Footer setActive={ setTitle} />
      
        </Box>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
