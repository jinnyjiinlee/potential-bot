interface LastMessageProps {
  onModalClick: () => void;
}

export default function LastMessage({ onModalClick }: LastMessageProps) {
  return (
    <section className='w-full px-4 py-12 flex flex-col items-center justify-center bg-[#f8f9fb] shadow-lg'>
      <div className='text-center text-2xl md:text-3xl font-bold leading-snug mb-8'>
        지금 바로 <span className='text-[var(--primary-color)]'>포텐셜봇</span>과 함께
        <br />
        당신의 잠재력을 깨워보세요!
      </div>
      <button
        onClick={onModalClick}
        className='
          bg-[var(--primary-color)] hover:bg-[var(--primary-color-dark)]
          text-white font-bold py-3 px-7 rounded-4xl shadow-md
          text-md transition-all duration-200 hover:scale-105
          cta-button final-message-btn open-modal-btn subscribe-btn-footer ga-track
        '
      >
        무료로 시작하기
      </button>
    </section>
  );
}
