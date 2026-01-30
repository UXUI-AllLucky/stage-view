import React, { useState } from 'react';
import './place.scss';

const PlaceBtn = () => {
    const [selected, setSelected] = useState('사연(2026)');
    const options = ['사연(2026)', '삼연(2025)', '재연(2024)', '초연(2023)'];

    // 옵션 클릭 시 상태 업데이트 및 드롭다운 닫기 (체크박스 해제)
    const handleSelect = (option) => {
        setSelected(option);
        const checkbox = document.getElementById('dropdown4');
        if (checkbox) checkbox.checked = false;
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div className="dropdown4">
                <input id="dropdown4" type="checkbox" />
                <label className="dropdown-overlay" htmlFor="dropdown4"></label>
                <label htmlFor="dropdown4">
                    <h2>
                        {selected} <span className="arrow-down"></span>
                    </h2>
                </label>
                <ul className='dropdown-list'>
                    {options.map((option) => (
                        <li
                            key={option}
                            className={selected === option ? 'active' : ''}
                            onClick={() => handleSelect(option)}
                        >
                            <a href="#!" onClick={(e) => e.preventDefault()}>{option}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default PlaceBtn;
