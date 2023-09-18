import React, { useState } from 'react';
import Header from './components/Header/header';
import Movies from './components/Movies/movies';
import "./App.css"
import { Container } from 'react-bootstrap';

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <Container fluid>
      <Header onSearch={handleSearch} />
      <Movies searchQuery={searchQuery} />
   </Container>
  );
}

export default App;
