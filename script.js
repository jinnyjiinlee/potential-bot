// Modal Control Functions
function openModal() {
  const modal = document.getElementById('subscribeModal');
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';
  // Reset to first step
  showStep(1);
}

function closeModal() {
  const modal = document.getElementById('subscribeModal');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

// Step Management
function showStep(stepNumber) {
  // Hide all steps
  document.querySelectorAll('.step-content').forEach((step) => {
    step.style.display = 'none';
  });
  // Show selected step
  document.getElementById(`step${stepNumber}`).style.display = 'block';
}

// Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2200);
}

// Close Modal when clicking outside
document.getElementById('subscribeModal').addEventListener('click', function (e) {
  if (e.target === this) {
    closeModal();
  }
});

// Scroll Animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('aos-animate');
    }
  });
}, observerOptions);

// Observe all elements with data-aos attribute
document.addEventListener('DOMContentLoaded', () => {
  const animatedElements = document.querySelectorAll('[data-aos]');
  animatedElements.forEach((element) => {
    observer.observe(element);
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;

  if (currentScroll <= 0) {
    header.classList.remove('scroll-up');
    return;
  }

  if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
    // Scroll Down
    header.classList.remove('scroll-up');
    header.classList.add('scroll-down');
  } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
    // Scroll Up
    header.classList.remove('scroll-down');
    header.classList.add('scroll-up');
  }
  lastScroll = currentScroll;
});

// === Supabase Email Subscription ===
const SUPABASE_URL = 'https://tarbsjeluiovntyasmjw.supabase.co';
const SUPABASE_API_KEY =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRhcmJzamVsdWlvdm50eWFzbWp3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNDE4MTUsImV4cCI6MjA2NTgxNzgxNX0.9NTOQ-hoiZYur7sSdBeVQQzO69RcNA5Aa-a5yz66eqQ';
const TABLE = 'users';

const subscribeForm = document.getElementById('subscribeForm');
if (subscribeForm) {
  subscribeForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const resultDiv = document.getElementById('result');
    resultDiv.textContent = '';
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_API_KEY,
          Authorization: 'Bearer ' + SUPABASE_API_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        resultDiv.textContent = '구독이 완료되었습니다!';
        subscribeForm.reset();
      } else {
        resultDiv.textContent = '에러가 발생했습니다. 다시 시도해 주세요.';
      }
    } catch (err) {
      resultDiv.textContent = '네트워크 오류가 발생했습니다.';
    }
  });
}

// === Modal Subscribe Form (Email + User Type) ===
const modalSubscribeForm = document.getElementById('modalSubscribeForm');
if (modalSubscribeForm) {
  modalSubscribeForm.addEventListener('submit', async function (e) {
    e.preventDefault();
    const email = document.getElementById('modal-email').value.trim();
    const userType = modalSubscribeForm.querySelector('input[name="userType"]:checked');
    const resultDiv = document.getElementById('modal-result');
    const emailError = document.getElementById('email-error');
    resultDiv.textContent = '';
    emailError.textContent = '';
    if (!userType) {
      resultDiv.textContent = '유형을 선택해 주세요.';
      return;
    }
    // 이메일 형식 검증 (정규식)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      emailError.textContent = '잘못된 이메일 형식입니다.';
      return;
    }
    const payload = { email, user_type: userType.value };
    console.log('Request payload:', payload);
    try {
      const res = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_API_KEY,
          Authorization: 'Bearer ' + SUPABASE_API_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=representation',
        },
        body: JSON.stringify(payload),
      });
      console.log('Response status:', res.status);
      if (res.ok) {
        const responseBody = await res.text();
        console.log('Response body:', responseBody);
        showToast('신청되었습니다! 이제 매일 아침 포텐셜봇이 응원의 메시지를 보내드릴게요!');
        modalSubscribeForm.reset();
        setTimeout(() => {
          closeModal();
        }, 1200);
      } else {
        console.log('Error response status:', res.status);
        res.text().then((text) => console.log('Error response body:', text));
        resultDiv.textContent = '에러가 발생했습니다. 다시 시도해 주세요.';
      }
    } catch (err) {
      resultDiv.textContent = '네트워크 오류가 발생했습니다.';
    }
  });
  // 이메일 입력 시 에러 메시지 초기화
  document.getElementById('modal-email').addEventListener('input', function () {
    document.getElementById('email-error').textContent = '';
  });
}

// 버튼/카드/입력폼 터치 피드백 (scale 효과)
function addTouchFeedback(selector) {
  document.querySelectorAll(selector).forEach((el) => {
    el.addEventListener('mousedown', () => {
      el.style.transform = 'scale(0.97)';
      el.style.boxShadow = '0 4px 16px rgba(127,90,240,0.18)';
    });
    el.addEventListener('mouseup', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
    el.addEventListener('touchstart', () => {
      el.style.transform = 'scale(0.97)';
      el.style.boxShadow = '0 4px 16px rgba(127,90,240,0.18)';
    });
    el.addEventListener('touchend', () => {
      el.style.transform = '';
      el.style.boxShadow = '';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  addTouchFeedback('.cta-button');
  addTouchFeedback('.subscribe-btn');
  addTouchFeedback('.submit-button');
  addTouchFeedback('.feature-card');
  addTouchFeedback('.testimonial-card');
  addTouchFeedback('.user-type-card');
  addTouchFeedback('.subscribe-form input[type="email"]');
  addTouchFeedback('.modal-subscribe-form input[type="email"]');
});

// Toss 스타일 후기 캐러셀 자동 슬라이드
(function () {
  const track = document.querySelector('.testimonial-track');
  if (!track) return;
  const cards = Array.from(track.children);
  let current = 0;
  let visible = 2;
  let interval = null;

  function updateVisible() {
    visible = window.innerWidth <= 600 ? 1 : 2;
  }
  function slideTo(idx) {
    updateVisible();
    const maxIdx = cards.length - visible;
    if (idx > maxIdx) idx = 0;
    if (idx < 0) idx = maxIdx;
    track.style.transform = `translateX(-${(100 / visible) * idx}%)`;
    current = idx;
  }
  function next() {
    slideTo(current + 1);
  }
  function start() {
    if (interval) clearInterval(interval);
    interval = setInterval(next, 3500);
  }
  function stop() {
    if (interval) clearInterval(interval);
  }

  window.addEventListener('resize', () => slideTo(current));
  track.parentElement.addEventListener('mouseenter', stop);
  track.parentElement.addEventListener('mouseleave', start);

  slideTo(0);
  start();
})();

// 푸터 연도 자동 표기
document.addEventListener('DOMContentLoaded', function () {
  const year = new Date().getFullYear();
  const el = document.getElementById('footer-year');
  if (el) el.textContent = year;
});
