import React, { useState } from 'react';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import StarRating from './StarRating';
import './review.scss';
import { db } from '../../../firebase'; // firebase 경로 확인!
import DateSelector from './DateSelector';
import { FaCalendarAlt } from "react-icons/fa";

const ReviewWrite = ({ seatId }) => {
    // 입력값 상태 관리
    const [inputs, setInputs] = useState({
        content: '',
        rating: 5, // 기본값 5점
    });

    // 선택된 날짜를 저장할 상태 (초기값 없음)
    const [selectedDate, setSelectedDate] = useState(null);
    // 달력을 보여줄지 말지 결정하는 스위치 
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);

    // 텍스트 변경했을 때 실행될 함수
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs({ ...inputs, [name]: value });
    };

    // ⭐ 별점 변경 함수
    const handleRatingChange = (newRating) => {
        setInputs({ ...inputs, rating: newRating });
    };

    // 날짜 선택
    const handleDateSelect = (date) => {
        setSelectedDate(date);
        setIsCalendarOpen(false); // 달력 닫기
    };

    // ⭐ 랜덤 닉네임 생성기 (나중에 로그인 정보로 대체될 곳)
    const getRandomNickname = () => {
        const adjectives = ["행복한", "즐거운", "설레는", "감동한", "신난"];
        const animals = ["관람객", "뮤덕", "평론가", "예매자", "팬"];
        const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
        const randomAni = animals[Math.floor(Math.random() * animals.length)];
        return `${randomAdj} ${randomAni}`;
    };


    // 리뷰 저장 함수
    const handleSubmit = async (e) => {
        e.preventDefault();

        // 유효성 검사
        if (!inputs.content) {
            alert("내용을 입력해주세요!");
            return;
        }
        if (!selectedDate) {
            alert("관람일을 선택해주세요!");
            return;
        }


        try {
            // (나중에 실제 로그인을 구현하면 user.nickname으로 바꾸기
            const autoNickname = getRandomNickname();
            await addDoc(collection(db, "reviews"), {
                seatId: seatId,
                userName: autoNickname, // 현재는 자동 생성된 닉네임 사용
                content: inputs.content,
                rating: Number(inputs.rating),
                date: selectedDate,
                createdAt: serverTimestamp()
            });

            // 초기화
            setInputs({ userName: '', content: '', rating: 5 });
            setSelectedDate(null);
            alert("리뷰가 등록되었습니다!");

        } catch (error) {
            console.error("에러:", error);
            alert("등록 실패 ㅠㅠ");
        }
    };

    return (
        <form className="review-form" onSubmit={handleSubmit}>
            {/* 관람일 선택 */}
            <div className="form-row">
                {/* 관람일 선택 (팝업 형태) */}
                <div className="date-picker-container">
                    <button
                        type="button" // submit 방지 필수
                        className={`date-btn ${selectedDate ? 'selected' : ''}`}
                        onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                    >
                        <FaCalendarAlt />
                        {selectedDate ? selectedDate : "관람일 선택"}
                    </button>

                    {/* 달력 팝업 */}
                    {isCalendarOpen && (
                        <div className="calendar-popup">
                            <DateSelector
                                selectedDate={selectedDate}
                                onDateChange={handleDateSelect}
                            />
                        </div>
                    )}
                </div>
                {/* 별점 영역 */}
                <div className="star-rating-box">
                    <StarRating
                        rating={inputs.rating}
                        setRating={handleRatingChange}
                    />
                </div>
            </div>

            {/* 내용 입력 영역 */}
            <div className="review-text-box">
                <textarea
                    name="content"
                    placeholder="후기를 남겨주세요."
                    value={inputs.content}
                    onChange={handleChange}
                ></textarea>
                <button type="submit" className="submit-btn">등록</button>
            </div>
        </form>
    );
};

export default ReviewWrite;

