import { IoIosSearch } from 'react-icons/io';
import { useSearch } from '../../../context/SearchContext';
import './style.scss';

/**
 * 검색 입력 폼 컴포넌트
 * Home 페이지와 Header 모달에서 재사용됨
 * @param {object} props
 * @param {Function} [props.onClose] - 모달 내에서 사용 시, 검색 후 모달을 닫기 위한 함수
 */
const SearchForm = ({ onClose }) => {
  const { keyword, setKeyword, onSearch } = useSearch();

  /**
   * 폼 제출 핸들러 (엔터 키 or 버튼 클릭)
   * @param {React.FormEvent} e
   */
  const handleSubmit = (e) => {
    e.preventDefault(); //폼 제출시 새로고침 막기
    onSearch(); // 검색기능. Context의 페이지 이동 로직 실행
    if (onClose) onClose(); // 모달 닫기 (Header에서 사용 시)
  };

  return (
    <form className="input1" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="작품, 극장, 배우를 입력해보세요"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button type="submit" className="search-btn">
        <IoIosSearch />
      </button>
    </form>
  );
};

export default SearchForm;
