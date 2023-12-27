import type { Metadata } from 'next';
import './globals.css';
import localfont from 'next/font/local';
import ThemeProvider from './components/ThemeProvider';

const satoshi = localfont({
  src: [
    {
      path: './fonts/Satoshi-Variable.ttf',
      weight: '100',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Light.ttf',
      weight: '300',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Bold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/Satoshi-Black.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});

export const metadata: Metadata = {
  title: 'sntpdev',
  description:
    'Staying up-to-date on the latest web development trends and technologies',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className={satoshi.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="h-full">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
