import React from 'react';
import './style.scss';

const Pagenation = ({ totalPage, currentPage, setCurrentPage }) => {
    // 페이지 번호 리스트
    const createPageList = () => {
        const pageList = [];
        const limit = 5; // 한 페이지에 보이는 페이지 버튼 개수

        // 1. 현재 페이지의 startPage 계산하기   // 예: currentPage가 1~5면 startPage는 1, 6~10이면 startPage는 6
        const startPage = Math.floor((currentPage - 1) / limit) * limit + 1;
        // 2. startPage부터 5개를 만들되, totalPage를 넘지 않게 하기
        for (let i = startPage; i < startPage + limit; i++) {
            if (i > totalPage) break; // 전체 페이지보다 크면 반복 종료
            pageList.push(i);
        }
        return pageList;
    };

    return (
        <div className="pagination">
            {/* 이전 버튼 */}
            <button
                className="prev"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
            >
                &lt;
            </button>

            {/* 페이지 번호들 */}
            {createPageList().map((page, idx) => (
                <button
                    key={idx}
                    onClick={() => setCurrentPage(page)}
                    className={currentPage === page ? 'active' : ''} // 현재 페이지엔 active 클래스 붙이기
                >
                    {page}
                </button>
            ))}

            {/* 다음 버튼 */}
            <button
                className="next"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage === totalPage}
            >
                &gt;
            </button>
        </div>
    );
};

export default Pagenation;
