import _ from 'lodash';
import { Navbar, Nav, Container, FormControl, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { searchResultsContext } from './contextProviders/SearchResultsContext';
import { onSearch } from './api/SearchApi';
import Render from './Render';
import SearchPage from './pages/SearchPage';

function App() {
  const [results, setResults] = useState([]);
  const [navName, setNavName] = useState('');

  const handleOnChange = (e) => {
    let inputVal = e.target.value;
    if (inputVal !== '') {
      onSearch(inputVal).then(res => {
        setResults(res.data);
        setNavName('clear');
      });
    }
  }

  const handleClick = e => {
    const currentClass = e.target.className.split(' ');
    setNavName(currentClass[0]);
  }


  return (
    <>
      <Container>
        <Navbar bg="dark" variant='dark' expand="lg" sticky="top">
          <Container fluid>
            <Navbar.Brand href="#">Jukebox</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link onClick={handleClick} className="home" href="#">Home</Nav.Link>

                <Nav.Link onClick={handleClick} className="playlist" href="#">Playlist</Nav.Link>

              </Nav>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={_.debounce(handleOnChange, 100)}
                />
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <hr></hr>

        <searchResultsContext.Provider value={results}>
          <SearchPage isHidden={navName} />
          <Render page={navName} component={<SearchPage />} />
        </searchResultsContext.Provider>
      </Container>
    </>
  );
}

export default App;
