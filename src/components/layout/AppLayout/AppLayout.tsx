import { Inter } from '@next/font/google';
import Head from 'next/head';
import { type PropsWithChildren } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

import cx from './index.module.scss';

const inter = Inter({
	variable: '--next-font',
	subsets: ['latin', 'cyrillic'],
});

export function AppLayout({ children }: PropsWithChildren) {
	return (
		<div className={cx('container', inter.variable)}>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Chulakov template next js" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			{children}
			<Footer />
		</div>
	);
}
