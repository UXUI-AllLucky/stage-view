
import './review.scss';
import React, { useState, useEffect } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaStar } from 'react-icons/fa6';
import ReviewWrite from './ReviewWrite';


// 1. 파이어베이스 도구들 불러오기
import { db } from '../../../firebase'; // 경로 꼭 확인하세요! (firebase.js 위치)
import {
    collection,
    query,
    where,
    orderBy,
    onSnapshot
} from "firebase/firestore";

const Review = ({ seatId, onClose }) => {
    // 2. 리뷰 목록을 담을 상태
    const [reviews, setReviews] = useState([]);

    //  [읽기] 파이어베이스에서 실시간으로 리뷰 가져오기. 로직은 여기 남겨둡니다 (목록을 보여줘야 하니까)
    useEffect(() => {
        if (!seatId) return;

        // 쿼리 만들기: "reviews" 컬렉션에서 -> 현재 "seatId"와 같은 글을 찾아서 -> "작성일(createdAt)" 내림차순 정렬
        const q = query(
            collection(db, "reviews"),
            where("seatId", "==", seatId),
            orderBy("createdAt", "desc")
        );

        // 실시간 구독 (누가 글 쓰면 내 화면에도 바로 뜸)
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const newReviews = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setReviews(newReviews);
        });

        return () => unsubscribe(); // 뒷정리
    }, [seatId]);



    // const reviews = getReviewsBySeatId(seatId);

    // const formatSeatTitle = (id) => {
    //     if (!id) return '리뷰';
    //     const [row, col] = id.split('-');
    //     return `${row}열 ${col}번 좌석 리뷰`;
    // };

    const formatSeatTitle = (id) => {
        if (!id) return '리뷰';
        const parts = id.split('-');
        if (parts.length < 2) return id;
        return `${parts.join(' ')}번 좌석 리뷰`;
    };

    return (
        <div className="review-container">
            <div className="review-header">
                <h2>{formatSeatTitle(seatId)}</h2>
                <button className="close-review-btn" onClick={onClose}><IoMdClose /></button>
            </div>


            {/* seatId를 넘겨줘야 "어느 좌석에 글을 쓸지" 알 수 있습니다 */}
            <ReviewWrite seatId={seatId} />

            <div className="review-list">
                {/* 데이터가 없을 때 */}
                {reviews.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '20px', color: '#777' }}>
                        아직 등록된 후기가 없습니다.<br />첫 번째 후기를 남겨주세요!
                    </div>
                )}
                {/* 데이터가 있을 때 목록 뿌리기 */}
                {reviews.map((review) => (
                    <div className="review-item" key={review.id}>
                        <div className="review-item-header">
                            <span className="user-name">By. {review.userName}</span>
                            <div className="right-info">
                                <span className="review-date">{review.date}</span>
                                <div className="review-average">
                                    <i className="review-average-i"><FaStar /></i>
                                    {review.rating}
                                </div>
                            </div>
                        </div>
                        <div className="review-content">
                            {review.content}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Review;