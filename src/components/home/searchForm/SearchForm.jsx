import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BiSearch } from 'react-icons/bi'; // 아이콘
import './style.scss';

const SearchForm = ({ onClose }) => {
    const [text, setText] = useState('');
    const navigate = useNavigate();

    const changeInput = (e) => {
        setText(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault(); // 새로고침 방지

        if (!text.trim()) {
            alert('검색어를 입력해주세요!');
            return;
        }

        // 검색 페이지로 이동
        navigate(`/searchpage?q=${text}`);
        setText('');

        // (선택사항) 모달 닫기
        if (onClose) onClose();
    };

    return (
        /* div 대신 form 태그에 input1 클래스를 줍니다. */
        <form className="input1" onSubmit={onSubmit}>
            <input
                type="text"
                placeholder="작품, 극장, 배우를 입력해보세요"
                value={text}
                onChange={changeInput}
                /* 자동완성 배경색 문제 방지용 */
                autoComplete="off"
            />

            {/* 검색 버튼: absolute로 오른쪽 끝에 배치 */}
            <button type="submit" className="search-btn">
                <BiSearch />
            </button>
        </form>
    );
};

export default SearchForm;
