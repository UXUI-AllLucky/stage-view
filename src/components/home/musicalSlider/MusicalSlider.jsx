import useSwiperSlider from '../../../hooks/useSwiperSlider';
import './musicalSlider.css';

const MusicalSlider = () => {
  // ✅ 훅 사용! (복잡한 로직은 다 저 안에서 처리됨)
  const { sliderRef } = useSwiperSlider();

  return (
    <section className="base-template">
      <div className="wrapper base-template__wrapper">
        <h4 className="base-template__title">
          뮤지컬<span className="video-slider__special">Musical</span>
        </h4>

        <div className="base-template__content">
          {/* Slider Container */}
          <div className="video-slider swiper" ref={sliderRef}>
            <div className="video-slider__wrapper swiper-wrapper">
              {/* Slide 1 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img
                    src="./images/bonnieandclyde.jpg"
                    alt="보니 앤 클라이드"
                  />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    보니 앤 클라이드
                    <span className="video-slider__info-text">
                      홍익대 대학로 아트센터 대극장
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 2 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img
                    src="./images/maybehapplyending.jpg"
                    alt="어쩌면 해피엔딩"
                  />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    어쩌면 해피엔딩
                    <span className="video-slider__info-text">
                      두산아트센터 연강홀
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 3 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img
                    src="./images/spirited_away.jpg"
                    alt="센과 치히로의 행방불명 오리지널 투어"
                  />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    센과 치히로의 행방불명 오리지널 투어
                    <span className="video-slider__info-text">
                      예술의전당 오페라극장
                    </span>
                  </h5>
                </div>
              </div>

              {/* Slide 4 (무한루프를 위해 슬라이드는 최소 3~5개 이상 있어야 자연스럽습니다) */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/anna_karenina.jpg" alt="안나카레니나" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    안나 카레니나
                    <span className="video-slider__info-text">
                      세종문화회관 대극장
                    </span>
                  </h5>
                </div>
              </div>
              {/* Slide 5 */}
              <div className="video-slider__slide swiper-slide">
                <div className="video-slider__image-box">
                  <img src="./images/lempicka.jpg" alt="렘피카" />
                </div>
                <div className="video-slider__info-box">
                  <h5 className="video-slider__info-title">
                    렘피카
                    <span className="video-slider__info-text">
                      NOL 씨어터 코엑스 우리은행홀
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

export default MusicalSlider;
