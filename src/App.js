import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './Components/UI/Header';
import Footer from './Components/UI/Footer';
import Search from './Components/UI/Search';
import CharacterGrid from './Components/Characters/CharacterGrid';
import RandomQuote from './Components/Quote/RandomQuoteGrid';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [quoteItems, setQuoteItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };

    const randomQuote = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/quote/random`
      );
      setQuoteItems(result.data);
    };

    fetchItems();
    randomQuote();
  }, [query]);

  return (
    <div className='container'>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <RandomQuote isLoading={isLoading} items={quoteItems} />
      <CharacterGrid isLoading={isLoading} items={items} />
      <Footer />
    </div>
  );
};

export default App;
