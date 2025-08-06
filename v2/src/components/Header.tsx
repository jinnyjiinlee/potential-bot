type HeaderProps = {
  onModalClick: () => void;
};

export default function Header({ onModalClick }: HeaderProps) {
  return (
    <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-[20px] z-[1000] py-4 transition-all duration-300 ease-in-out'>
      <div className='max-w-[1200px] mx-auto px-4 flex justify-between items-center'>
        {/* 로고 */}
        <div className='flex items-center gap-2 text-xl md:text-2xl font-semibold text-gray-800'>
          <span className='bg-[var(--primary-color)] text-white w-8 h-8 rounded-md flex items-center justify-center'>
            P
          </span>
          <span className='logo-text'>포텐셜봇</span>
        </div>
        {/* 모바일: 햄버거 버튼 */}
        <button className='md:hidden text-2xl px-2' aria-label='메뉴 열기'>
          ☰
        </button>
        {/* 네비게이션 (PC 이상에서만 노출) */}
        <nav className='hidden md:flex gap-8 items-center'>
          <a
            href='#'
            className='text-gray-700 text-base hover:text-[var(--primary-color)] transition-colors duration-200'
          >
            포텐셜봇이란?
          </a>
          <a
            href='#features'
            className='text-gray-700 text-base hover:text-[var(--primary-color)] transition-colors duration-200'
          >
            우리가 특별한 이유
          </a>
          <a
            href='#testimonials'
            className='text-gray-700 text-base hover:text-[var(--primary-color)] transition-colors duration-200'
          >
            함께한 이야기
          </a>
          <button
            onClick={onModalClick}
            className='bg-[var(--primary-color)] text-white px-4 py-2 rounded-md font-semibold hover:opacity-90 transition'
          >
            무료 구독하기
          </button>
        </nav>
      </div>
    </header>
  );
}
