import React from 'react';

const Testimonials = ({ onOpenModal }) => {
  return (
    <section id='testimonials' className='testimonials'>
      <div className='section-content'>
        <div className='testimonial-carousel'>
          <div className='testimonial-track'>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“취업 준비로 힘들었는데, 포텐셜봇 덕분에 매일 아침 힘을 얻었어요.”</p>
              <div className='testimonial-author'>취준생 김00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>
                “이직 준비가 막막했는데, 매일 아침 긍정적인 메시지 덕분에 용기를 냈어요.”
              </p>
              <div className='testimonial-author'>이직 준비생 박00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“회사 생활이 지칠 때마다 포텐셜봇의 메시지가 큰 위로가 되었어요.”</p>
              <div className='testimonial-author'>직장인(사원급) 이00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“아침마다 따뜻한 말 한마디가 이렇게 큰 힘이 될 줄 몰랐어요.”</p>
              <div className='testimonial-author'>직장인(리더급) 최00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“포텐셜봇 덕분에 하루를 긍정적으로 시작할 수 있어요!”</p>
              <div className='testimonial-author'>취준생 정00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“면접 전날, 포텐셜봇의 응원 메시지에 정말 큰 용기를 얻었습니다.”</p>
              <div className='testimonial-author'>취준생 윤00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“매일 아침 새로운 메시지가 기다려져요. 출근길이 즐거워졌어요.”</p>
              <div className='testimonial-author'>직장인(사원급) 오00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“슬럼프였는데, 포텐셜봇이 다시 일어설 힘을 줬어요.”</p>
              <div className='testimonial-author'>취준생 이00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“혼자라고 느낄 때마다 포텐셜봇이 친구가 되어줬어요.”</p>
              <div className='testimonial-author'>이직 준비생 장00님</div>
            </div>
            <div className='testimonial-card'>
              <p className='testimonial-text'>“리더로서 부담이 컸는데, 매일 아침 응원에 힘이 납니다.”</p>
              <div className='testimonial-author'>직장인(리더급) 송00님</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
