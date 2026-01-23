import React from 'react';

const NextWorkList = ({ next }) => {
    const { place, img, alt, title } = next;
    return (
        <li className="nextWork">
            <img src={img} alt={alt} />
            <h6>{title}</h6>
            <p className="place">{place}</p>
        </li>
    );
};

export default NextWorkList;
