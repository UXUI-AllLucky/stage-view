/*검색어(keyword) 상태와 페이지 이동(useNavigate) 로직을 관리, 
여기서 useNavigate를 사용하여 검색 실행 시 페이지를 이동시킵니다.

Context : React에서 “여러 컴포넌트에서 동일 기능 공유”할 때 정석 패턴. 다이렉트로 데이터 전달. 상태관리 방법 중 하나*/

import { createContext, useContext, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * 검색 관련 상태 및 로직을 관리하는 Context
 */
const SearchContext = createContext();

/**
 * SearchProvider 컴포넌트
 * @param {object} props
 * @param {React.ReactNode} props.children
 */
export const SearchProvider = ({ children }) => {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    /**
     * <검색 실행 함수>
     * 검색어가 있을 경우 URL 쿼리 파라미터와 함께 이동
     */
    const onSearch = useCallback(() => {
        if (!keyword.trim()) return; // 공백일 경우 검색 방지
        navigate(`/searchpage?query=${encodeURIComponent(keyword)}`);
        setKeyword(''); // (선택사항) 이동 후 검색어 초기화가 필요하다면 사용
    }, [keyword, navigate]);

    return (
        <SearchContext.Provider value={{ keyword, setKeyword, onSearch }}>
            {children}
        </SearchContext.Provider>
    );
};

/**
 * Custom Hook: 검색 Context 사용
 * @returns {{ keyword: string, setKeyword: Function, onSearch: Function }}
 */
export const useSearch = () => useContext(SearchContext);

export default SearchProvider;
