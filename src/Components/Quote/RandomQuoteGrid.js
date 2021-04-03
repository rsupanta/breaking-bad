import React from 'react';
import RandomQuote from './RandomQuoteItem';

const RandomQuoteGrid = ({ items, isLoading }) => {
  return isLoading ? (
    ''
  ) : (
    <section className='cards'>
      {items.map((item) => (
        <RandomQuote key={item.quote_id} item={item}></RandomQuote>
      ))}
    </section>
  );
};

export default RandomQuoteGrid;
