import React from 'react';
import { Link } from 'react-router-dom';

const NextWorkList = ({ next }) => {
    const { place, img, alt, title, category, id } = next;
    return (
        <li className="nextWork">
            {/* 카테고리(musical/play)에 따라 경로 자동 설정 */}
            <Link to={`/${category}/${id}`}>
                <img src={img} alt={alt} />
                <h6>{title}</h6>
                <p className="place">{place}</p>
            </Link>
        </li>
    );
};

export default NextWorkList;
