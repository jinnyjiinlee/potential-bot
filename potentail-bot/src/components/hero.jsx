import React from 'react';
import characterImage from '../assets/character-image.png';

const Hero = ({ onOpenModal }) => {
  return (
    <section className='hero'>
      <div className='hero-content hero-purple'>
        <img src={characterImage} alt='포텐셜봇 캐릭터' className='main-character' />
        <h1 className='hero-title'>
          <span className='highlight'>
            더 좋은 하루를
            <br />
            선물할게요
          </span>
        </h1>
        <p className='hero-description'>
          매일 아침 8시,
          <br />
          포텐셜봇이 전하는 따뜻한 응원으로
          <br />
          당신의 잠재력을 깨워보세요
        </p>
        <button className='cta-button' onClick={onOpenModal}>
          무료로 시작하기
        </button>
      </div>
    </section>
  );
};

export default Hero;
