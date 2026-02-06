// 별표를 직접 클릭해서 0.5점 단위로 채우는 방식 별 하나를 '왼쪽 절반'과 '오른쪽 절반' 두 구역으로 나누어 클릭 이벤트를 받으면 됩니다.
import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './review.scss'; // 스타일 공유

const StarRating = ({ rating, setRating }) => {
    // 마우스가 올라갔을 때 보여줄 임시 별점 (호버 효과용)
    const [hover, setHover] = useState(null);

    // 1점부터 5점까지 별 5개를 반복해서 그립니다.
    return (
        <div className="star-rating-container">
            {[...Array(5)].map((_, i) => {
                const index = i + 1;       // 1, 2, 3, 4, 5 (별 번호)
                const halfIndex = index - 0.5; // 0.5, 1.5, 2.5... (반쪽 별 점수)

                // 현재 보여줄 점수 (마우스 호버 중이면 hover값, 아니면 실제 저장된 rating값)
                const displayScore = hover !== null ? hover : rating;

                return (
                    <div key={index} className="star-wrapper">
                        {/* 1. 왼쪽 절반 클릭 영역 (투명) */}
                        <div
                            className="click-area left"
                            onClick={() => setRating(halfIndex)}
                            onMouseEnter={() => setHover(halfIndex)}
                            onMouseLeave={() => setHover(null)}
                        />

                        {/* 2. 오른쪽 절반 클릭 영역 (투명) */}
                        <div
                            className="click-area right"
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(null)}
                        />

                        {/* 3. 실제 보여지는 아이콘 (Full / Half / Empty) */}
                        {displayScore >= index ? (
                            <FaStar className="star-icon full" />
                        ) : displayScore >= halfIndex ? (
                            <FaStarHalfAlt className="star-icon half" />
                        ) : (
                            <FaRegStar className="star-icon empty" />
                        )}
                    </div>
                );
            })}


        </div>
    );
};

export default StarRating;