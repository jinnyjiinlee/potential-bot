import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: '포텐셜봇 | 매일 아침 응원으로 나의 잠재력을 깨워주는 AI 친구',
  description:
    '포텐셜봇은 취준생, 이직 준비생, 직장인 모두에게 매일 아침 AI가 맞춤 응원을 전해주는 서비스입니다. 매일 새로운 메시지로 잠재력을 깨우고, 긍정적인 하루의 시작을 도와주는 AI 응원 챗봇! 따뜻한 AI 친구가 당신의 아침을 특별하게 만들어줍니다.',
  icons: {
    icon: '/images/character-image.webp',
    apple: '/apple-touch-icon.png',
    shortcut: '/images/character-image.webp',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko'>
      <head>
        <link rel='canonical' href='https://www.potential-bot.netlify.app/' />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.potential-bot.netlify.app/' />
        <meta property='og:title' content='포텐셜봇 | AI 응원 챗봇으로 더 좋은 하루 시작' />
        <meta
          property='og:description'
          content='포텐셜봇은 AI 챗봇이 매일 아침 따뜻한 응원 메시지로 당신의 잠재력을 깨워주는 서비스입니다. 취준생, 이직생, 직장인 모두를 위한 맞춤형 AI 응원 챗봇!'
        />
        <meta property='og:image' content='https://www.potential-bot.netlify.app/og-preview-image.jpg' />
        <meta property='og:site_name' content='포텐셜봇' />
        <meta property='og:locale' content='ko_KR' />
        {/* Twitter Card */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='포텐셜봇 | AI 응원 챗봇으로 더 좋은 하루 시작' />
        <meta
          name='twitter:description'
          content='포텐셜봇은 AI 챗봇이 매일 아침 따뜻한 응원 메시지로 당신의 잠재력을 깨워주는 서비스입니다.'
        />
        <meta name='twitter:image' content='https://www.potential-bot.netlify.app/og-preview-image.jpg' />
        <meta name='twitter:url' content='https://www.potential-bot.netlify.app/' />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
