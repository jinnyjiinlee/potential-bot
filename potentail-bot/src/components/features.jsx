import React from 'react';

const Feature = ({ onOpenModal }) => {
  return (
    <section id='features' className='features features-purple'>
      <div className='section-content'>
        <div className='features-grid'>
          <div className='feature-card'>
            <div className='feature-icon'>🌅</div>
            <h3>아침 8시, 특별한 메시지</h3>
            <p>
              하루를 시작하는 당신에게
              <br />
              따뜻한 응원의 메시지를 전달합니다
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>💫</div>
            <h3>맞춤형 콘텐츠</h3>
            <p>
              당신의 상황에 맞는
              <br />
              특별한 메시지를 제공합니다
            </p>
          </div>
          <div className='feature-card'>
            <div className='feature-icon'>✨</div>
            <h3>지속적인 동기부여</h3>
            <p>
              매일 아침 새로운 에너지로
              <br />
              하루를 시작하세요
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
