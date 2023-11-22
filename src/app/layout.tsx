import Header from '@/components/Header/Header';
import './globals.css';
import Providers from './provider/Providers';
import Bar from '@/components/Bar/Bar';
import SearchBox from '@/components/SearchBox/SearchBox';

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
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  )
}
