function FeatureCard({ icon, title, description }) {
  return (
    <div
      className="
        bg-[var(--card-bg)]
        rounded-2xl
        shadow-md
        transition
        duration-200
        flex flex-col items-center
        min-h-[220px]
        px-5 py-8
        hover:shadow-xl
        hover:-translate-y-1
        hover:scale-[1.03]
      "
    >
      <div
        className="
          text-4xl
          mb-5
          text-[#7f5af0]
          bg-[#ede9fe]
          rounded-full
          px-5 py-3
          shadow
          flex items-center justify-center
        "
      >
        {icon}
      </div>
      <h3 className="text-lg md:text-xl font-extrabold text-[#22223b] mb-4 text-center tracking-tight">
        {title}
      </h3>
      <p className="text-base md:text-lg text-[#7c7c8a] text-center font-semibold leading-relaxed tracking-tight">
        {description}
      </p>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="bg-[#f9f9fb] py-16">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <FeatureCard
            icon="🌅"
            title="아침 8시, 특별한 메시지"
            description={
              <>
                하루를 시작하는 당신에게
                <br />
                따뜻한 응원의 메시지를 전달합니다
              </>
            }
          />
          <FeatureCard
            icon="💫"
            title="맞춤형 콘텐츠"
            description={
              <>
                당신의 상황에 맞는
                <br />
                특별한 메시지를 제공합니다
              </>
            }
          />
          <FeatureCard
            icon="🦄"
            title="매일의 성장 체크"
            description={
              <>
                소소한 변화부터
                <br />
                당신의 일상을 기록해보세요
              </>
            }
          />
        </div>
      </div>
    </section>
  );
}
