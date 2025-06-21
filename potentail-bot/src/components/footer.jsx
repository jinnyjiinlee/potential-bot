import React from 'react';

const Footer = ({ onOpenModal }) => {
  return (
    <>
      <div id='toast' class='toast'></div>
      <div class='toast-backdrop' id='toast-backdrop'></div>
      {/* 감성적 마지막 메시지 (미니멀) */}
      <section class='final-message-minimal'>
        <div class='final-message-minimal-title'>
          지금 바로 <span>포텐셜봇</span>과 함께
          <br />
          당신의 잠재력을 깨워보세요!
        </div>
        <button class='cta-button final-message-btn' onClick={onOpenModal}>
          무료로 시작하기
        </button>
      </section>
      {/* Footer */}
      <footer class='footer'>
        <div class='footer-content'>
          <p>
            © <span id='footer-year'></span> 포텐셜봇
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
