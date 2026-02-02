import useSwiperSlider from '../../../hooks/useSwiperSlider';
import './playSlider.css';
import { Link } from 'react-router-dom';


const PlaySlider = ({ playListData }) => {
  // ✅ 훅 사용! (복잡한 로직은 다 저 안에서 처리됨)
  const { sliderRef } = useSwiperSlider();

  // 1. playListData가 없으면 빈 배열로 처리 (에러 방지)
  const safeData = playListData || [];

  // 2. 'underway'인 것만 필터링 -> 리뷰 순 정렬 -> 상위 5개 자르기
  const top5Plays = [...safeData]
    .filter((item) => item.current === 'underway')
    .sort((a, b) => b.review - a.review)
    .slice(0, 5);

  return (
    <section className="base-template">
      <div className="wrapper base-template__wrapper">
        <h4 className="base-template__title">
          연극<span className="video-slider__special">Play</span>
        </h4>

        <div className="base-template__content">
          {/* Slider Container */}
          <div className="video-slider swiper" ref={sliderRef}>
            <div className="video-slider__wrapper swiper-wrapper">
              {top5Plays.map((item) => (
                <div key={item.id} className="video-slider__slide swiper-slide">
                  <Link to={`/play/${item.id}`} className="slider-link">
                    <div className="video-slider__image-box">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="video-slider__info-box">
                      <h5 className="video-slider__info-title">
                        {item.title}
                        <span className="video-slider__info-text">
                          {item.place}
                        </span>
                      </h5>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaySlider;
