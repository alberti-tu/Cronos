import type { Metadata } from "next"

export const metadata: Metadata = {
  title: 'Cronos',
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      url: '/cronos-light.png',
      media: '(prefers-color-scheme: light)'
    },
    {
      rel: 'icon',
      type: 'image/png',
      url: '/cronos-dark.png',
      media: '(prefers-color-scheme: dark)'
    }
  ]
}

type RootProps = {
  children: React.ReactNode
}

function RootLayout({ children }: Readonly<RootProps>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}

export default RootLayout
