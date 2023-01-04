import { Inter } from '@next/font/google';
import { type PropsWithChildren } from 'react';

import { cn } from '@/services/classNames';

import s from './AppLayout.module.scss';

const inter = Inter({
	variable: '--next-font',
	subsets: ['latin', 'cyrillic'],
});

export function AppLayout({
	children,
}: PropsWithChildren<Record<string, unknown>>) {
	return (
		<div className={cn(s.container, inter.variable)}>
			<header>Header</header>
			{children}
			<footer>Footer</footer>
		</div>
	);
}
