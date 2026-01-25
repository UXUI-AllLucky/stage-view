// 진짜 실무 방식: SearchContext로 전역 공유

import { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const onSearch = () => {
    if (!keyword.trim()) return;
    navigate(`/search?query=${keyword}`);
  };

  return (
    <SearchContext.Provider value={{ keyword, setKeyword, onSearch }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearch = () => useContext(SearchContext);
