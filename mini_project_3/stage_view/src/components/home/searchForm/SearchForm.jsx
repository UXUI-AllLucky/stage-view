import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.scss';

const SearchForm = ({ onClose }) => {
  const [text, setText] = useState('');
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) {
      alert('검색어를 입력해주세요!');
      return;
    }

    // App.jsx의 Route path="/searchpage" 와 일치시킴
    // 쿼리 파라미터 이름은 'q'로 통일 (예: /searchpage?q=벙커)
    navigate(`/searchpage?q=${text}`);

    // 검색 후 input창 초기화
    setText('');

    // 만약 부모(모달)에서 닫기 기능을 줬다면 실행해라!
    if (onClose) onClose();
  };

  const changeInput = (e) => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <form className="form" onSubmit={onSubmit}>
      <p>
        <input
          type="text"
          name="text"
          placeholder="작품, 극장, 배우를 입력해보세요"
          value={text}
          onChange={changeInput}
        />
        <button type="submit">검색</button>
      </p>
    </form>
  );
};

export default SearchForm;
