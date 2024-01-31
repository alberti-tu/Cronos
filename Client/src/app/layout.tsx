import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cronos"
}

type RootProps = {
  children: React.ReactNode
}

function RootLayout({ children }: Readonly<RootProps>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
