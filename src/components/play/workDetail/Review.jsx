
import './review.scss';
import { IoMdClose } from "react-icons/io";
import { FaStar } from 'react-icons/fa6';

// props로 seatId, onClose를 받습니다.
const Review = ({ seatId, onClose }) => {

    const formatSeatTitle = (id) => {
        if (!id) return '리뷰';
        const [row, col] = id.split('-');
        return `${row}열 ${col}번 좌석 리뷰`;
    };

    return (
        <div className="review-container">
            <div className="review-header">
                <h2>{formatSeatTitle(seatId)}</h2>
                <button className="close-review-btn" onClick={onClose}><IoMdClose /></button>
            </div>
            <div className="review-list">
                {/* 리뷰 목록 */}
                <div className="review-item">
                    <div className="review-item-header">
                        <div className="review-date">2026.01.25</div>
                        <div className="review-average"><i className="review-average-i">
                                                <FaStar />
                                            </i>4.5</div>

                    </div>
                    <div className="review-content">리뷰 내용 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo necessitatibus aut, commodi error autem nobis non nulla labore culpa itaque, molestias maxime sed? Expedita soluta consectetur adipisci aliquam officiis itaque. </div>
                </div>
            </div>
        </div>

    );
};

export default Review;