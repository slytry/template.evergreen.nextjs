import { Inter } from '@next/font/google';
import { type PropsWithChildren } from 'react';

import cx from './index.module.scss';

const inter = Inter({
	variable: '--next-font',
	subsets: ['latin', 'cyrillic'],
});

export function AppLayout({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	return (
		<div className={cx('container', inter.variable)}>
			<header>Header</header>
			{children}
			<footer>Footer</footer>
		</div>
	);
}
