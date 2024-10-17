import type { Metadata } from 'next'
import { Onest, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/shared/header/Header'
import { Navbar } from '@/components/shared/navbar/Navbar'
import { NavbarProvider } from '@/providers/Navbar.provider'

const onest = Onest({ subsets: ['latin'], variable: '--font-onest' })
const montserrat = Montserrat({
	subsets: ['latin'],
	variable: '--font-montserrat',
})

export const metadata: Metadata = {
	title: 'HR Frontend',
	description: 'Generated by create next app',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<body
				className={`${onest.variable} ${montserrat.variable} antialiased min-h-screen bg-gray-75`}
			>
				<NavbarProvider>
					<Header></Header>
					<main className='flex flex-col flex-1 w-full'>{children}</main>
					<Navbar></Navbar>
				</NavbarProvider>
			</body>
		</html>
	)
}
