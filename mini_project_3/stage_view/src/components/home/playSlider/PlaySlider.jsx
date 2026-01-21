import React, { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import './playSlider.css';

const PlaySlider = () => {
  const sliderRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Swiper 초기화
    swiperInstance.current = new Swiper(slider, {
      // [추가] 모듈 등록
      modules: [Autoplay],

      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40, // 카드 사이 간격
      speed: 1000,
      allowTouchMove: true,

      //2번째 사진부터 시작
      initialSlide: 1,

      // 무한 루프
      loop: true,

      //10초마다 자동 재생
      autoplay: {
        delay: 10000,
        disableOnInteraction: false, // 유저가 건드려도 자동재생 유지
      },

      breakpoints: {
        575: { spaceBetween: 20 }, // 필요 시 간격 조정
      },
    });

    // Clean-up
    return () => {
      if (swiperInstance.current) swiperInstance.current.destroy();
    };
  }, []);

  return (
    <section className="base-template">
      <div className="wrapper base-template__wrapper">
        <h4 className="base-template__title">
          연극<span className="video-slider__special">play</span>
        </h4>

        <div className="base-template__content">
          {/* Slider Container */}
          <div className="video-slider swiper" ref={sliderRef}>
            <div className="video-slider__wrapper swiper-wrapper">
              {/* Slide 1 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/elephantsong.jpg" alt="엘리펀트 송" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    엘리펀트 송
                    <span className="video-slider__info-text">
                      yes24 스테이지 3관
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/bunkertrilogy.jpg" alt="벙커 트롤리지" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    벙커 트롤리지
                    <span className="video-slider__info-text">
                      홍익대대학로아트센터 소극장
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img
                    src="./images/repaper_les_vivants.jpg"
                    alt="살아있는 자를 수선하기"
                  />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    살아있는 자를 수선하기
                    <span className="video-slider__info-text">
                      국립정동극장
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 4 (무한루프를 위해 슬라이드는 최소 3~5개 이상 있어야 자연스럽습니다) */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/then_and_today2.jpg" alt="그때도 오늘2" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    그때도 오늘2
                    <span className="video-slider__info-text">
                      홍익대대학로아트센터 소극장
                    </span>
                  </h5>
                </div>
              </div>
              {/* Slide 5*/}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/gloomy_day.jpg" alt="사의 찬미" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    사의 찬미
                    <span className="video-slider__info-text">
                      세종문화회관 M씨어터
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaySlider;
