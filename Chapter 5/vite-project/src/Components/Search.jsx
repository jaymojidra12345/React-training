import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const mockResults = {
  react: ['React Basics', 'React Hooks', 'React Router'],
  javascript: ['JavaScript ES6', 'JavaScript DOM', 'JavaScript Fetch API'],
  css: ['CSS Flexbox', 'CSS Grid', 'CSS Animations'],
};

function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || ''; // Get the 'q' query parameter

  const [searchInput, setSearchInput] = useState(query);

  // Fetch results based on the query
  const results = mockResults[query?.toLowerCase().trim()] || [];

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({ q: searchInput });
  };

  return (
    <div>
      <h1>Search Page</h1>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          placeholder="Search..."
        /><br/><br/>
        <button type="submit">Search</button>
      </form>

      <div>
        <h2>Results for "{query}":</h2>
        {results.length > 0 ? (
          <ul>
            {results.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
}

export default Search;
