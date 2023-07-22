import './App.css';
import React, {useState} from 'react';
import NavBar from './Components/NavBar';
import DisplayBook from './Components/DisplayBook';
import DetailsBook from './Components/DetailsBook';



function App() {
  let [book, setBook]=useState([]);
  // let [selectedBook, setSelectedBook]=useState([]);
  return (
    <div className="App">
      <NavBar setBook={setBook}/>
      <DetailsBook/>
      <DisplayBook book={book}/>
    </div>
  );
}

export default App;
