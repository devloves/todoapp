import { Inter } from 'next/font/google'
import './globals.css'
import ProviderWarp from './ProviderWarp'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body classNameName={inter.classNameName}>
        <ProviderWarp>
        {children}
        </ProviderWarp>
      </body>
    </html>
  )
}
