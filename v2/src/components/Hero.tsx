import Image from 'next/image';
import characterImage from '../assets/character-image.png';

export default function Hero({ onModalClick }) {
  return (
    <section
      className='
      min-h-screen
      flex
      items-center
      justify-center
      relative
      pt-28  /* 7rem */
      pb-20  /* 5rem */
      px-4   /* 모바일에서는 좌우 여백 작게 */
      bg-gradient-to-b
      from-[var(--gradient-start)]
      to-[var(--gradient-end)]
      overflow-hidden
    '
    >
      <div
        className='
        w-full
        max-w-[480px]
        mx-auto
        relative
        z-[1]
        text-center
      '
      >
        <Image
          src={characterImage}
          alt='포텐셜봇 캐릭터'
          className='w-40 md:w-52 mx-auto mb-8 block bg-transparent relative z-[1]'
          priority
        />
        <h1
          className='
          text-3xl
          md:text-5xl
          font-extrabold
          text-[#22223b]
          mb-6
          leading-tight
        '
        >
          <span>
            더 좋은 하루를
            <br />
            선물할게요
          </span>
        </h1>
        <p
          className='
          text-base
          md:text-xl
          text-[#5b3a8b]
          mb-10
          font-bold
          leading-relaxed
        '
        >
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
