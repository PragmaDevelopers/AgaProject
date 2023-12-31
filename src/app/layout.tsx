import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: '--dm-sans-font',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000']
});

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-br">
            <body className={`${dmSans.variable} w-screen h-screen transition-all scroll-smooth overflow-hidden bg-neutral-50 text-neutral-950 font-dmSans`}>
                <div className='w-full h-16 flex flex-row justify-between items-center p-2 bg-neutral-100'>
                    <Link href="/">
                        Logo
                    </Link>
                    <Link href="/">
                        Inicio
                    </Link>
                </div>
                <div className='w-full h-full bg-neutral-50'>
                    {children}
                </div>
            </body>
        </html>
    )
}
