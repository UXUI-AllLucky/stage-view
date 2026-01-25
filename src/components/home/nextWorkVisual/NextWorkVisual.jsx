import React from 'react';
import './style.scss';
import NextWorkList from './NextWorkList';

const NextWorkVisual = ({ WorkData }) => {
  const nextWork = WorkData.filter((item) => item.current === 'expected');

  return (
    <section className="nextWorkSection">
      <h4>공연 예정</h4>
      <ul className="nextWorkList">
        {nextWork.map((next) => (
          <NextWorkList key={next.id} next={next} />
        ))}
      </ul>
    </section>
  );
};

export default NextWorkVisual;
