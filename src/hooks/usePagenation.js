import { useState, useEffect } from 'react';

// perPage 한 페이지 10개로 설정함
const usePagenation = (data = [], itemsPerPage = 10) => {
    const [currentPage, setCurrentPage] = useState(1);

    // 전체 페이지 수 계산
    const totalPage = Math.ceil(data.length / itemsPerPage);

    // 현재 페이지에 보여줄 데이터 자르기
    // 예: 1페이지면 0~10, 2페이지면 10~20
    const currentData = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    // 데이터 변경 시 1페이지부터로 초기화처리
    useEffect(() => {
        if (currentPage > totalPage) {
            setCurrentPage(1);
        }
    }, [data, totalPage, currentPage]);

    return {
        currentData, // 잘린 데이터 (화면에 뿌릴 것)
        currentPage, // 현재 페이지 번호
        totalPage, // 전체 페이지 수
        setCurrentPage, // 페이지 변경 함수 (데이터 변경 시 현재 페이지(1페이지)부터 업데이트처리)
    };
};

export default usePagenation;
