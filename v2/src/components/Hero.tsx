import Image from 'next/image';

type HeroProps = {
  onModalClick: () => void;
};

export default function Hero({ onModalClick }: HeroProps) {
  return (
    <section
      className=' min-h-screen
    flex
    items-center
    text-center
    justify-center
    pt-28   /* 헤더 높이 + 여유 */
    pb-20
    px-4
    bg-gradient-to-b
    from-[var(--gradient-start)]
    to-[var(--gradient-end)]
    overflow-hidden'
    >
      <div className='max-w-[480px] mx-auto'>
        {/* 이미지만 감싸는 박스 */}
        <div className='relative w-40 h-40 md:w-52 md:h-52 mx-auto mb-8'>
          <Image
            src='/images/character-image.png'
            alt='포텐셜봇 캐릭터'
            fill
            priority
            className='object-contain bg-transparent'
          />
        </div>

        {/* 텍스트 & 버튼은 별도로 */}
        <h1 className='text-left text-3xl md:text-5xl font-extrabold text-[#22223b] mb-6 leading-tight'>
          더 좋은 하루를
          <br />
          선물할게요
        </h1>

        <p className='text-left text-base md:text-xl text-[#5b3a8b] mb-10 font-bold leading-relaxed'>
          매일 아침,
          <br />
          포텐셜봇이 전하는 따뜻한 응원으로
          <br />
          당신의 잠재력을 깨워보세요
        </p>

        <button
          onClick={onModalClick}
          className='
        bg-[var(--primary-color)]
        text-white
        rounded-full
        text-base
        md:text-lg
        font-bold
        px-8
        md:px-12
        py-4
        shadow-lg
        transition
        duration-200
        hover:bg-[var(--primary-color-dark)]
        hover:-translate-y-1
        hover:scale-105
      '
        >
          무료로 시작하기
        </button>
      </div>
    </section>
  );
}
