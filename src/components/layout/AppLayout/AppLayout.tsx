import { Inter } from '@next/font/google';
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
			<Header />
			{children}
			<Footer />
		</div>
	);
}
