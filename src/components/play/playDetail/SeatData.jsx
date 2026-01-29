import React, { useState, useEffect } from 'react';
import './seatStyle.scss';

// props로 mapData(좌석배열)와 title(공연장 이름)을 받습니다.
const SeatData = ({ mapData, title }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // mapData가 바뀔 때마다(다른 공연장 클릭 시) 선택 초기화
    useEffect(() => {
        setSelectedSeats([]);
    }, [mapData]);

    // 안전장치: 데이터가 안 넘어왔을 때 에러 방지
    if (!mapData) return <div>좌석 정보를 불러오는 중...</div>;

    const handleSeatClick = (rowIndex, seatNum) => {
        /* ... 기존 로직 동일 ... */
        const seatId = `${rowIndex + 1}-${seatNum}`;
        if (selectedSeats.includes(seatId)) {
            setSelectedSeats(selectedSeats.filter((id) => id !== seatId));
        } else {
            setSelectedSeats([...selectedSeats, seatId]);
        }
    };

    return (
        <div className="seat-selection-container">
            {/* 제목도 props로 받아서 띄워주면 좋겠죠? */}
            <div className="stage-screen">STAGE</div>

            <div className="seat-map">
                {/* ⭐ 여기가 핵심: props로 받은 mapData를 돌립니다 */}
                {mapData.map((row, rowIndex) => (
                    <div key={rowIndex} className="seat-row">
                        {/* ... 기존 렌더링 코드 그대로 ... */}
                        <span className="row-label">{rowIndex + 1}열</span>
                        <div className="seats">
                            {row.map((seatNum, colIndex) => {
                                if (seatNum === 0)
                                    return (
                                        <div
                                            key={`gap-${rowIndex}-${colIndex}`}
                                            className="seat-gap"
                                        />
                                    );

                                const seatId = `${rowIndex + 1}-${seatNum}`;
                                const isSelected = selectedSeats.includes(seatId);

                                return (
                                    <button
                                        key={`seat-${rowIndex}-${colIndex}`}
                                        className={`seat-item ${isSelected ? 'selected' : ''}`}
                                        onClick={() => handleSeatClick(rowIndex, seatNum)}
                                    >
                                        {seatNum}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
            {/* ... 하단 정보 표시 코드 ... */}
        </div>
    );
};

export default SeatData;
