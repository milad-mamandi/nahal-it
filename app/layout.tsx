import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import BootstrapClient from './_components/BootstrapClient';
import Header from './_components/Header';
import Footer from './_components/Footer';

const inter = Inter({subsets: ['latin']});

export const metadata: Metadata = {
	title: 'Nahal IT',
	description: 'A Simple Website',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang="en" dir="rtl">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
