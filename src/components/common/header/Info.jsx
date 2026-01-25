import { IoPersonSharp } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

/**
 * 헤더 우측 정보 컴포넌트 (검색, 프로필)
 * @param {object} props
 * @param {Function} props.onOpenSearch - 검색 모달 열기 함수
 */
const Info = ({ onOpenSearch }) => {
  return (
    <div className="info">
      <ul className="infolist">
        <li>
          {/* 버튼 클릭 시 Layout의 isSearchOpen 상태를 true로 변경 */}
          <button
            className="search-btn"
            onClick={onOpenSearch}
            aria-label="검색창 열기"
          >
            <IoIosSearch size={26} />
          </button>
        </li>
        <li>
          <button className="profile-link" aria-label="프로필 이동">
            <IoPersonSharp size={26} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Info;
