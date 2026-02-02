import React, { useState, useEffect } from 'react';
import './seat.scss';
import { FaWheelchair } from "react-icons/fa";

// props로 mapData(좌석배열)와 title(공연장 이름), onSeatClick(부모에게 알림)을 받습니다.
const SeatData = ({ mapData, title, onSeatClick }) => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    // mapData가 바뀔 때마다(다른 공연장 클릭 시) 선택 초기화
    useEffect(() => {
        setSelectedSeats([]);
    }, [mapData]);

    // 안전장치: 데이터가 안 넘어왔을 때 에러 방지
    if (!mapData) return <div>좌석 정보를 불러오는 중...</div>;

   const handleSeatClick = (seatId) => {
        const isSelected = selectedSeats.includes(seatId);

        if (isSelected) {
            // 이미 선택된 좌석 클릭 시 해제
            setSelectedSeats([]);
            if (onSeatClick) onSeatClick(null);
        } else {
            // 다른 좌석 클릭 시: 기존 것 날리고 현재 좌석만 선택 (중복 클릭 방지)
            setSelectedSeats([seatId]);
            if (onSeatClick) onSeatClick(seatId);
        }
    };

    // ✅ [공통 함수] 좌석 하나(버튼)를 렌더링하는 함수
    const renderSeatBtn = (seatNum, uniqueKey) => {
        // 0은 통로
        if (seatNum === 0) return <div key={uniqueKey} className="seat-gap" />;
        
        const seatId = `${uniqueKey}-${seatNum}`; // 아이디 생성 규칙
        const isSelected = selectedSeats.includes(seatId);
        // ⭐휠체어석 : 'W'가 포함된 문자열인지 확인 (숫자 좌석은 여기서 false가 됨)
        const isWheelchair = typeof seatNum === 'string' && seatNum.includes('W');

    

    return (
            <button
                key={uniqueKey}
                className={`seat-item ${isSelected ? 'selected' : ''} ${isWheelchair ? 'wheelchair' : ''}`}
                onClick={() => handleSeatClick(seatId)}
            >
                {/* ⭐ 휠체어석이면 아이콘, 아니면 숫자 출력 */}
               {isWheelchair ? <FaWheelchair /> : seatNum}
            </button>
        );
    };

    // ---------------------------------------------------------
    // CASE A: 기존 일반적인 공연장 - 하위 호환성 유지
    // ---------------------------------------------------------
   if (Array.isArray(mapData)) {
        return (
            <div className="seat-selection-container">
                 {/* 공연장 이름 */}
                <strong className='theater-name'>({title})</strong>
                {/* 무대 */}
                <div className="stage-screen">STAGE</div>
                {/* ⭐ 여기가 핵심: props로 받은 mapData를 돌립니다 */}
                <div className="seat-map">
                    {mapData.map((row, rowIndex) => (
                        <div key={rowIndex} className="seat-row">
                            <span className="row-label">{rowIndex + 1}열</span>
                            <div className="seats">
                                {row.map((seat, col) => renderSeatBtn(seat, `R${rowIndex}-C${col}`))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    // ----------------------------------------------------
    // TYPE 2: 구역 시스템 (복잡한 극장) - 만능형
    // ----------------------------------------------------
    if (mapData.isComplex) {
        return (
            <div className="seat-selection-container">
                 {/* 공연장 이름 */}
                <strong className='theater-name'>({title})</strong>

                {/* 무대 */}
                <div className="stage-screen">STAGE</div>
                
                {/* layoutClass(예: layout-art-hall)를 div에 붙여서 
                   CSS Grid로 구역들의 위치를 잡습니다. 
                */}
                {/* layoutClass가 CSS Grid 모양을 결정함 */}
                <div className={`complex-container ${mapData.layoutClass}`}>
                    
                    {mapData.areas.map((area) => (
                        <div key={area.id} className={`area-zone area-${area.id}`}>
                            
                            {/* 라벨 (1F, 2F, 3F 등) */}
                            {area.label && <div className="area-badge">{area.label}</div>}

                            {/* [A] 가로형 (Grid) */}
                            {area.type === 'grid' && (
                                <div className="seat-map">
                                    {area.data.map((row, rIdx) => (
                                        <div key={rIdx} className="seat-row">
                                            <div className="seats">
                                                {row.map((seat, cIdx) => 
                                                    renderSeatBtn(seat, `${area.id}-r${rIdx}-c${cIdx}`)
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                           {/* [B] 세로형 (Vertical) - 사이드 좌석 */}
                            {area.type === 'vertical' && (
                                <div className="vertical-group">
                                    {area.data.map((floorData, idx) => (
                                        <div key={idx} className="vertical-floor">
                                            {/* 층수 라벨이 비어있지 않으면 표시 */}
                                            {floorData.floor && <span className="mini-label">{floorData.floor}</span>}
                                            {floorData.seats.map((seat, sIdx) => 
                                                renderSeatBtn(seat, `${area.id}-${floorData.floor}-${sIdx}`)
                                            )}
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    ))}
                </div>
            </div>
        );
    }
};

export default SeatData;






       

             