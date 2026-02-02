import React, { useState } from 'react';
import './placeBtn.scss';

const PlaceBtn = ({ options, selected, onSelect }) => {

   // 드롭다운 열림/닫힘 상태 관리
    const [isOpen, setIsOpen] = useState(false);

    // 1. 현재 선택된 옵션 찾기
    const currentOption = options.find(opt => opt.key === selected) || options[0];
    // 현재 선택된 것이 '리스트의 첫 번째(최신)'라면 -> 버튼엔 "현재 시즌"이라고 표시 // 그게 아니라면(과거 시즌이면) -> 원래 이름("2023 재연" 등) 표시
    const buttonLabel = (currentOption.key === options[0].key) 
        ? '현재 시즌' 
        : currentOption.label;

    // 토글 함수
    const toggleDropdown = () => setIsOpen(!isOpen);

    // 옵션 클릭 함수
    const handleOptionClick = (key) => {
        onSelect(key);   // 부모에게 알림
        setIsOpen(false); // 드롭다운 닫기
    };

    return (
        // 1. 상태(isOpen)에 따라 클래스(active) 추가
        <div className={`place-dropdown ${isOpen ? 'active' : ''}`}>
            
            {/* 2. 클릭 트리거 (버튼 역할) */}
            <div className="dropdown-trigger" onClick={toggleDropdown}>
                <h2>
                    {/* 👇 "현재 시즌" 또는 "2023 재연" 등이 나옴 */}
                    {buttonLabel} 
                    <span className="arrow-down"></span>
                </h2>
            </div>

            {/* 3. 드롭다운 리스트 */}
            <ul className="dropdown-list">
                {options.map((option) => (
                    <li 
                        key={option.key} 
                        className={selected === option.key ? 'selected' : ''}
                    >
                        <button 
                            type="button" 
                            onClick={() => handleOptionClick(option.key)}
                        >
                            {/* 👇 리스트에는 구체적인 이름("2025 사연")이 나옴 */}
                            {option.label}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PlaceBtn;
 

    // // 옵션 클릭 시 상태 업데이트 및 드롭다운 닫기 (체크박스 해제)
    // const handleSelect = (option) => {
    //     setSelected(option);
    //     const checkbox = document.getElementById('dropdown4');
    //     if (checkbox) checkbox.checked = false;
    // };

//     return (
//         <div style={{ display: 'flex', justifyContent: 'center' }}>
//             <div className="dropdown4">
//                 <input id="dropdown4" type="checkbox" />
//                 <label className="dropdown-overlay" htmlFor="dropdown4"></label>
//                 <label htmlFor="dropdown4">
//                     <h2>
//                         {selected} <span className="arrow-down"></span>
//                     </h2>
//                 </label>
//                 <ul className='dropdown-list'>
//                     {options.map((option) => (
//                         <li
//                             key={option}
//                             className={selected === option ? 'active' : ''}
//                             onClick={() => handleSelect(option)}
//                         >
//                             <a href="#!" onClick={(e) => e.preventDefault()}>{option}</a>
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };



