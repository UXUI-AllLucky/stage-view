import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

/**
 * Swiper 슬라이더 설정 및 더블클릭 이벤트를 관리하는 커스텀 훅
 * @returns {{ sliderRef: React.MutableRefObject<null> }} - 슬라이더 컨테이너에 연결할 ref
 */
const useSwiperSlider = () => {
  const sliderRef = useRef(null);
  const swiperInstance = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // 1. Swiper 초기화
    swiperInstance.current = new Swiper(slider, {
      modules: [Autoplay],
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 40, // 카드 사이 간격

      // 설정해둔 최적의 속도
      speed: 1500,
      // 터치 민감도 조절 (낮을수록 묵직하게 안 따라옴)
      touchRatio: 0.7, // 0.5로 설정하면 손가락 이동 거리의 절반만큼만 움직입니다.

      allowTouchMove: true,

      initialSlide: 1, //2번째 사진부터 시작
      loop: true,

      autoplay: {
        delay: 10000, //10초마다 자동 재생
        disableOnInteraction: false, // 유저가 건드려도 자동재생 유지
      },

      breakpoints: {
        575: { spaceBetween: 20 }, // 카드 사이 간격 조정
      },
    });

    // 2. 더블 클릭 이벤트 핸들러 (이전/다음 이동)
    const handleDoubleClick = (e) => {
      // 1. 클릭된 요소가 속한 슬라이드 찾기 (.swiper-slide)
      const clickedSlide = e.target.closest('.swiper-slide');
      if (!clickedSlide || !swiperInstance.current) return;

      // 2. 왼쪽(이전) 슬라이드라면 이전으로 이동
      if (clickedSlide.classList.contains('swiper-slide-prev')) {
        swiperInstance.current.slidePrev();
        // 오른쪽(다음) 슬라이드이라면 다음으로 이동
      } else if (clickedSlide.classList.contains('swiper-slide-next')) {
        swiperInstance.current.slideNext();
      }
    };
    // Swiper 컨테이너에 더블 클릭 이벤트 등록 (복제된 슬라이드까지 커버하기 위함)
    slider.addEventListener('dblclick', handleDoubleClick);

    // 3. Clean-up   // 컴포넌트 해제 시 이벤트 리스너 제거
    return () => {
      slider.removeEventListener('dblclick', handleDoubleClick);
      if (swiperInstance.current) swiperInstance.current.destroy();
    };
  }, []);

  // 컴포넌트에서 ref를 연결할 수 있도록 반환
  return { sliderRef };
};

export default useSwiperSlider;
