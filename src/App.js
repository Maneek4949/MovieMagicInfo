import React, { useState } from 'react';
import Header from './components/Header/header';
import Movies from './components/Movies/movies';
import "./App.css"

function App() {
  const [searchQuery, setSearchQuery] = useState(''); 
  const handleSearch = (query) => {
    setSearchQuery(query);
  }

  return (
    <div className="App">
      <Header onSearch={handleSearch} />
      <Movies searchQuery={searchQuery} />
    </div>
  );
}

export default App;
