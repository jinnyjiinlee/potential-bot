import React from 'react';

const Header = ({ onOpenModal }) => {
  return (
    <header className='header'>
      <div className='header-content'>
        <div className='logo'>
          <span className='logo-icon'>P</span>
          <span className='logo-text'>포텐셜봇</span>
        </div>
        <nav className='nav'>
          <a href='#team' className='nav-link hide-on-small'>
            포텐셜봇이란?
          </a>
          <a href='#features' className='nav-link hide-on-small'>
            우리가 특별한 이유
          </a>
          <a href='#testimonials' className='nav-link'>
            함께한 이야기
          </a>
          <button className='subscribe-btn' onClick={onOpenModal}>
            무료 구독하기
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
