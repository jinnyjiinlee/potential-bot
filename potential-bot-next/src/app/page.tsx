import Image from 'next/image';

export default function Home() {
  return (
    <>
      {/* Header */}
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
            <button className='subscribe-btn open-modal-btn subscribe-btn-header ga-track'>무료 구독하기</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className='hero'>
        <div className='hero-content hero-purple'>
          <img src='./src/assets/character-image.png' alt='포텐셜봇 캐릭터' className='main-character' />
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
          <button className='cta-button open-modal-btn subscribe-btn-hero ga-track'>무료로 시작하기</button>
        </div>
      </section>

      {/* Features Section */}
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

      {/*  Testimonials Section (Carousel) */}
      <section id='testimonials' className='testimonials'>
        <div className='section-content'>
          <div className='testimonial-carousel'>
            <div className='testimonial-track'>
              <div className='testimonial-card'>
                <p className='testimonial-text'>“취업 준비로 힘들었는데, 포텐셜봇 덕분에 매일 아침 힘을 얻었어요.”</p>
                <div className='testimonial-author'>취준생 김00님</div>
              </div>
              <div className='testimonial-card'>
                <p className='testimonial-text'>“이직 준비가 막막했는데, 매일 아침 긍정적인 용기를 얻어요.”</p>
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

      {/* Modal */}
      <div id='subscribeModal' className='modal'>
        <div className='modal-content'>
          <button className='close-button' id='close-modal-btn'>
            <svg width='28' height='28' viewBox='0 0 28 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
              <circle cx='14' cy='14' r='13' fill='#F5F5F7' stroke='#E0E0E0' />
              <path d='M9 9L19 19M19 9L9 19' stroke='#86868b' stroke-width='2' stroke-linecap='round' />
            </svg>
          </button>
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

            <form id='modalSubscribeForm'>
              <div className='email-form'>
                <input id='modal-email' type='email' name='email' placeholder='이메일 주소를 입력하세요' required />
                <span id='email-error' className='email-error'></span>
                <button type='submit'>구독하기</button>
              </div>
            </form>

            <div id='modal-result' className='modal-result'></div>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <div id='toast' className='toast'></div>
      <div className='toast-backdrop' id='toast-backdrop'></div>

      {/* Last Message  */}
      <section className='final-message-minimal'>
        <div className='final-message-minimal-title'>
          지금 바로 <span>포텐셜봇</span>과 함께
          <br />
          당신의 잠재력을 깨워보세요!
        </div>
        <button className='cta-button final-message-btn open-modal-btn subscribe-btn-footer ga-track'>
          무료로 시작하기
        </button>
      </section>

      {/*  Footer  */}
      <footer className='footer'>
        <div className='footer-content'>
          <p>
            © <span id='footer-year'></span> 포텐셜봇
          </p>
        </div>
      </footer>
    </>
  );
}
