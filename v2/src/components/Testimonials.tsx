'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const testimonials = [
  { text: '“취업 준비로 힘들었는데, 포텐셜봇 덕분에 매일 아침 힘을 얻었어요.”', author: '취준생 김00님' },
  { text: '“이직 준비가 막막했는데, 매일 아침 긍정적인 용기를 얻어요.”', author: '이직 준비생 박00님' },
  { text: '“회사 생활이 지칠 때마다 포텐셜봇의 메시지가 큰 위로가 되었어요.”', author: '직장인(사원급) 이00님' },
  { text: '“아침마다 따뜻한 말 한마디가 이렇게 큰 힘이 될 줄 몰랐어요.”', author: '직장인(리더급) 최00님' },
  { text: '“포텐셜봇 덕분에 하루를 긍정적으로 시작할 수 있어요!”', author: '취준생 정00님' },
  { text: '“면접 전날, 포텐셜봇의 응원 메시지에 정말 큰 용기를 얻었습니다.”', author: '취준생 윤00님' },
  { text: '“매일 아침 새로운 메시지가 기다려져요. 출근길이 즐거워졌어요.”', author: '직장인(사원급) 오00님' },
  { text: '“슬럼프였는데, 포텐셜봇이 다시 일어설 힘을 줬어요.”', author: '취준생 이00님' },
  { text: '“혼자라고 느낄 때마다 포텐셜봇이 친구가 되어줬어요.”', author: '이직 준비생 장00님' },
  { text: '“리더로서 부담이 컸는데, 매일 아침 응원에 힘이 납니다.”', author: '직장인(리더급) 송00님' },
];

function TestimonialCard({ text, author }) {
  return (
    <div
      className='
        bg-[var(--card-bg)]
        border border-[#ede9fe]
        rounded-3xl
        shadow-[var(--card-shadow)]
        px-6 py-10
        min-w-[300px] max-w-[350px]
        flex flex-col items-center
        m-2
        transition
        duration-200
        hover:shadow-[var(--card-shadow-hover)]
        hover:border-[var(--primary-color)]
        hover:-translate-y-1
        hover:scale-105
      '
    >
      <p className='text-[1.15rem] text-[var(--text-color)] font-medium text-center mb-6 leading-relaxed'>{text}</p>
      <div className='text-base text-[var(--primary-color)] font-bold mt-2 tracking-tight text-center'>{author}</div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id='testimonials' className='bg-white py-16'>
      <div className='max-w-5xl mx-auto px-4'>
        <Swiper
          modules={[Autoplay]}
          spaceBetween={16}
          slidesPerView='auto'
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          style={{ padding: '16px 0' }}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide
              key={i}
              style={{
                width: '320px',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <TestimonialCard text={t.text} author={t.author} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
