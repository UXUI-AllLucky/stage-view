import { IoPersonSharp } from 'react-icons/io5';
import { IoIosSearch } from 'react-icons/io';

const Info = ({ onOpenSearch }) => {
  return (
    <div className="info">
      <ul className="infolist">
        <li>
          {/* 클릭 시 실행 (a 태그 대신 button 권장, or e.preventDefault) */}
          <a
            href="#"
            className="search-btn"
            onClick={(e) => {
              e.preventDefault();
              onOpenSearch();
            }}
          >
            <IoIosSearch size={26} />
          </a>
        </li>
        <li>
          <a href="#" className="profile-link">
            <IoPersonSharp size={26} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Info;
