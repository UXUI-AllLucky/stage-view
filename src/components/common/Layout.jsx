/*검색 모달의 상태(isSearchOpen)를 관리합니다. SearchForm에 onClose를 넘겨주어 검색 후 모달이 닫히도록 처리*/

import { Outlet } from 'react-router-dom';
import { useState, useCallback } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { AiOutlineClose } from 'react-icons/ai'; // 닫기 아이콘
import SearchForm from '../../components/home/searchForm/SearchForm';
import './style.scss';

/**
 * 레이아웃 컴포넌트
 * 헤더, 푸터, 그리고 검색 모달(Overlay)을 관리합니다.
 * @param {object} props
 * @param {object} props.work - App에서 넘어오는 데이터 (필요 시 사용)
 */
const Layout = ({ work }) => {
  // 검색 모달 열림/닫힘 상태 관리
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 모달 여는 함수
  const handleOpenSearch = () => {
    setIsSearchOpen(true);
  };

  // 모달 닫는 함수
  const handleCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="layout-wrapper relative">
      {/* Header에 '열기' 함수 전달 
        Header -> Info -> Button 순으로 전달됩니다.
      */}
      {/* Header에 검색창 열기 함수 전달 */}
      <Header onOpenSearch={handleOpenSearch} />

      <main className="main-content">
        <Outlet context={{ work }} />
      </main>
      <Footer />

      {/* --- 검색 모달 (Overlay) --- */}
      {/* 상태가 true일 때만 화면에 렌더링 */}
      {isSearchOpen && (
        <div className="search-modal-overlay">
          {/* ✅ 수정 1: 배경 레이어 (클릭 시 닫힘) */}
          {/* div에는 onClose가 아니라 onClick을 써야 작동합니다! */}
          <div className="bg" onClick={handleCloseSearch}></div>

          {/* ✅ 수정 2: 닫기 버튼 (배경과 상관없이 화면에 고정) */}
          <button
            className="close-btn"
            onClick={handleCloseSearch}
            aria-label="닫기"
          >
            <AiOutlineClose />
          </button>

          {/* 컨텐츠 레이어 (여기는 클릭해도 안 닫힘) */}
          <div className="search-modal-content">
            <div className="form">
              <SearchForm onClose={handleCloseSearch} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Layout;
