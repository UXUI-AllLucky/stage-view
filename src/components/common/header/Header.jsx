import { Link } from 'react-router-dom';
import Nav from './Nav';
import Info from './Info';
import './style.scss';
/**
 * 헤더 컴포넌트
 * @param {object} props
 * @param {Function} props.onOpenSearch - 검색 모달 열기 함수
 */
const Header = ({ onOpenSearch }) => {
  return (
    <header id="header">
      <div className="inner">
        <h1 className="logo">
          <Link to="/">
            {/* 절대경로로 잡아야 상세페이지에서 헤더 푸터 로고 이미지 안깨짐 */}
            <img src="/images/stage_view_logo.svg" alt="stage review 로고" />
          </Link>
        </h1>
        <Nav />

        {/* Info 컴포넌트에 함수 전달 */}
        <Info onOpenSearch={onOpenSearch} />
      </div>
    </header>
  );
};

export default Header;
