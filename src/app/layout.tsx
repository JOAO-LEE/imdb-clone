import Header from '@/components/Header/Header';
import './globals.css';
import Providers from './provider/Providers';
import Bar from '@/components/Bar/Bar';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Bar />
          {children}
        </Providers>
      </body>
    </html>
  )
}
