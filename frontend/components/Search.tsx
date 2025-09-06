import React, { useState, useEffect, useCallback } from 'react';
import { strapiAPI } from '@/lib/strapi';
import { debounce } from 'lodash';

const Search = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const debouncedSearch = useCallback(
    debounce(async (searchTerm) => {
      if (searchTerm.length > 2) {
        try {
          const response = await strapiAPI.search(searchTerm);
          setSuggestions(response.data);
        } catch (error) {
          console.error('Search error:', error);
          setSuggestions([]);
        }
      } else {
        setSuggestions([]);
      }
    }, 300),
    []
  );

  useEffect(() => {
    debouncedSearch(query);
    return () => {
      debouncedSearch.cancel();
    };
  }, [query, debouncedSearch]);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSelect = (item) => {
    // Navigate to selected item
    window.location.href = '/' + item.slug;
    setQuery('');
    setSuggestions([]);
  };

  return (
    <div className="relative">
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search categories and content..."
        className="p-2 rounded text-black"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded shadow-md max-h-40 overflow-y-auto">
          {suggestions.map((item, index) => (
            <li
              key={index}
              onClick={() => handleSelect(item)}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {item.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Search;
