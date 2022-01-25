import { InputGroup, Input, InputGroupText, Button } from 'reactstrap'
import './App.css';
import React, { useState } from 'react';
import axios from 'axios'
import BookCard from './BookCard.js'

function App() {
  
  //to handle the search and fetch the results from api
  const handleSearch = () => {
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`).then(res => {
      if (res.data.items.length > 0) {
        setCards(res.data.items)
        console.log(cards);
      }
      console.log(res.data)
    }).catch(err => {
      console.log(err)
      return true;
    });
  }

  //states
  const [query, setQuery] = useState('');
  const [cards, setCards] = useState([])

  //header of the page
  const pageHeader = () => {
    return (
      <div className='header-image'>
        <div></div>
      </div>

    );
  }

  //search section
  const searchSection = () => {
    return (
      <div className='searchArea' style={{ width: '100%', margin: '3%' }}>
        <InputGroup style={{ width: '60%', margin: 'auto' }}>
          <Input placeholder='Search here...' value={query} onChange={e => setQuery(e.target.value)}></Input>
          <InputGroupText style={{ backgroundColor: 'white' }}>
            <Button className='btn btn-light' onClick={handleSearch}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className='bi bi-search'
                viewBox="0 0 16 16">
                <path
                  d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </Button>
          </InputGroupText>
        </InputGroup>
      </div>
    )
  }

  //handles the information of books fetched from api
  const handleCardsInfo = () => {

    console.log(cards)
    const cardItems = cards.map((item, i) => {
      let thumbnail = '';
      if (item.volumeInfo.imageLinks.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      return (
        <div className='col-lg-4' key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            authors={item.volumeInfo.authors}
            publisher={item.volumeInfo.publisher}
            description={item.volumeInfo.description}
            previewLink={item.volumeInfo.previewLink}
          />
        </div>
      )
    })
    return (
      <div className='container'>
        <div className='row'>{cardItems}</div>
      </div>
    )
  }
  return (
    <div className="w-100 h-100">
      {pageHeader()}
      {searchSection()}
      {handleCardsInfo()}
    </div>
  );
}

export default App;
