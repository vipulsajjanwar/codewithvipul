import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Vipul Sajjanwar - Software Test Engineer & QA Automation Specialist',
  description: 'Senior QA automation engineer with 7+ years of experience in test automation, API testing, and DevOps. Expert in Java, Selenium, TestNG, REST Assured, and AWS. Building scalable automation frameworks and CI/CD pipelines.',
  keywords: 'QA engineer, test automation, SDET, Selenium, Java, API testing, REST Assured, TestNG, Jenkins, Docker, AWS, DevOps, automation framework',
  generator: 'v0.app',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background dark">
      <body className="font-sans antialiased bg-background">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
