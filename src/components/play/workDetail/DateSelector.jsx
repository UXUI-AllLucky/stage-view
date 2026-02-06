// src/components/play/DateSelector.jsx
import React, { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import './dateSelector.scss';

const DateSelector = ({ selectedDate, onDateChange }) => {
    // 현재 보고 있는 달력의 연/월 (초기값: 오늘 날짜)
    const [viewDate, setViewDate] = useState(new Date());

    const year = viewDate.getFullYear();
    const month = viewDate.getMonth(); // 0(1월) ~ 11(12월)

    // 이번 달의 마지막 날짜 구하기 (예: 28, 30, 31)
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // 이번 달 1일이 무슨 요일인지 구하기 (0:일, 1:월 ... 6:토)
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    // 달력 이동 함수
    const changeMonth = (offset) => {
        const newDate = new Date(viewDate.setMonth(viewDate.getMonth() + offset));
        setViewDate(new Date(newDate));
    };

    // 날짜 클릭 핸들러
    const handleDateClick = (day) => {
        // 선택한 날짜 객체 생성
        const clickedDate = new Date(year, month, day);

        // 부모 컴포넌트에 전달
        // 날짜 포맷을 예쁘게 변환 (YYYY.MM.DD)
        const formattedDate = `${clickedDate.getFullYear()}.${clickedDate.getMonth() + 1}.${clickedDate.getDate()}`;
        onDateChange(formattedDate);
    };

    // 오늘 날짜인지, 선택된 날짜인지 확인하는 헬퍼 함수
    const isSelected = (day) => {
        if (!selectedDate) return false;
        const currentStr = `${year}.${month + 1}.${day}`;
        return selectedDate === currentStr;
    };

    // 과거 날짜인지 체크 (선택 불가 처리용)
    const isPastDate = (day) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0); // 시간은 무시하고 날짜만 비교
        const targetDate = new Date(year, month, day);
        return targetDate < today;
    };

    // 달력 그리기용 배열 생성
    const renderCalendarDays = () => {
        const days = [];

        // 1. 빈 칸 채우기 (1일 시작 전 요일만큼)
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
        }

        // 2. 실제 날짜 채우기
        for (let day = 1; day <= daysInMonth; day++) {
            const disabled = isPastDate(day);
            days.push(
                <div
                    key={day}
                    className={`calendar-day ${isSelected(day) ? 'selected' : ''} ${disabled ? 'disabled' : ''}`}
                    onClick={() => !disabled && handleDateClick(day)}
                >
                    {day}
                </div>
            );
        }
        return days;
    };

    return (
        <div className="custom-calendar">
            {/* 상단: 월 이동 헤더 */}
            <div className="calendar-header">
                <button onClick={() => changeMonth(-1)}><IoIosArrowBack /></button>
                <span className="current-month">
                    {year}년 {month + 1}월
                </span>
                <button onClick={() => changeMonth(1)}><IoIosArrowForward /></button>
            </div>

            {/* 요일 표시 */}
            <div className="calendar-weekdays">
                <div>일</div><div>월</div><div>화</div><div>수</div><div>목</div><div>금</div><div>토</div>
            </div>

            {/* 날짜 그리드 */}
            <div className="calendar-grid">
                {renderCalendarDays()}
            </div>
        </div>
    );
};

export default DateSelector;