import _ from 'lodash';
// import React, { useState } from 'react';
// import { searchResultsContext } from './contextProviders/SearchResultsContext';
// import { onSearch } from './api/SearchApi';
import SideBar from './components/SideBar/SideBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/HomePage';
import DiscoverPage from './pages/DiscoverPage';
import PlaylistPage from './pages/PlaylistPage';

function App() {
  // const [results, setResults] = useState([]);
  // const [navName, setNavName] = useState('');

  // const handleOnChange = (e) => {
  //   let inputVal = e.target.value;
  //   if (inputVal !== '') {
  //     onSearch(inputVal).then(res => {
  //       setResults(res.data);
  //       setNavName('clear');
  //     });
  //   }
  // }

  // const handleClick = e => {
  //   const currentClass = e.target.className.split(' ');
  //   setNavName(currentClass[0]);
  // }


  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <SideBar />
          <div className='container-right'>
            <Routes>
              <Route path='/' element={<HomePage />}></Route>
              <Route path='/discover' element={<DiscoverPage />}></Route>
              <Route path='/playlist' element={<PlaylistPage />}></Route>
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
