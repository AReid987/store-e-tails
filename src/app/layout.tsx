import './globals.css'

export const metadata = {
  title: 'Store E. Tails',
  description: 'Single File Demo',
}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
