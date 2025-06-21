import React from 'react';

const Modal = ({ onClose }) => {
  return (
    <div id='subscribeModal' className='modal show'>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose}>
          닫기
        </button>
        <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <circle cx='14' cy='14' r='13' fill='#F5F5F7' stroke='#E0E0E0' />
          <path d='M9 9L19 19M19 9L9 19' stroke='#86868b' stroke-width='2' stroke-linecap='round' />
        </svg>
        <h2>포텐셜봇이 응원할게요!</h2>
        <form id='modalSubscribeForm' className='modal-subscribe-form'>
          <div className='form-group'>
            <h3>어떤 분이신가요?</h3>
            <div className='user-type-grid'>
              <label className='user-type-card'>
                <input type='radio' name='userType' value='취업준비생' required />
                <span className='user-type-icon'>🎓</span>
                <span className='user-type-label'>취업준비생</span>
              </label>
              <label className='user-type-card'>
                <input type='radio' name='userType' value='이직준비생' />
                <span className='user-type-icon'>🚀</span>
                <span className='user-type-label'>이직준비생</span>
              </label>
              <label className='user-type-card'>
                <input type='radio' name='userType' value='직장인(사원급)' />
                <span className='user-type-icon'>💼</span>
                <span className='user-type-label'>직장인(사원급)</span>
              </label>
              <label className='user-type-card'>
                <input type='radio' name='userType' value='직장인(리더급)' />
                <span className='user-type-icon'>🌟</span>
                <span className='user-type-label'>직장인(리더급)</span>
              </label>
            </div>
          </div>

          <div className='email-form'>
            <input id='modal-email' type='email' name='email' placeholder='이메일 주소를 입력하세요' required />
            <span id='email-error' className='email-error'></span>
            <button type='submit'>구독하기</button>
          </div>
          <div id='modal-result' className='modal-result'></div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
