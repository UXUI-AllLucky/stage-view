import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import Footer from './footer/Footer';
import Header from './header/Header';
import { IoCloseOutline } from 'react-icons/io5'; // 닫기 아이콘
import SearchForm from '../../components/home/searchForm/SearchForm';

const Layout = () => {
  // 검색창 열림/닫힘 상태 관리
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // 검색창 켜는 함수
  const onOpenSearch = () => {
    setIsSearchOpen(true);
  };

  // 검색창 끄는 함수
  const onCloseSearch = () => {
    setIsSearchOpen(false);
  };

  return (
    <>
      <Header onOpenSearch={onOpenSearch} />

      <main>
        <Outlet />
      </main>
      <Footer />

      {/* ▼ 검색 모달 (isSearchOpen이 true일 때만 보임) */}
      {isSearchOpen && (
        <div className="search-modal-overlay">
          <div className="search-modal-content">
            {/* 닫기 버튼 */}
            <button className="close-btn" onClick={onCloseSearch}>
              <IoCloseOutline size={34} color="#fff" />
            </button>

            {/* 기존 SearchForm 재사용! 검색 완료 시 닫히도록 onClose 전달 */}
            <SearchForm onClose={onCloseSearch} />
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
