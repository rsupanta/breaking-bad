import React from 'react';

const RandomQuoteItem = ({ item }) => {
  return (
    <div className='card randomQuote'>
      <h1>Random Quote</h1>
      <ul>
        <li>
          <strong>Author:</strong> {item.author}
        </li>
        <li>
          <strong>Quote:</strong> {item.quote}
        </li>
      </ul>
    </div>
  );
};

export default RandomQuoteItem;
