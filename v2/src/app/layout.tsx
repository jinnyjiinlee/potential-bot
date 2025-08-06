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
  description: '취준생, 이직생, 직장인 등 누구나 매일 아침 따뜻한 응원을 받으며 하루를 시작할 수 있는 포텐셜봇입니다.',
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
    <html lang='en'>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
