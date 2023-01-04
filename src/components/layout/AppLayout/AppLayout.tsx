import { type ReactNode } from 'react';

import s from './AppLayout.module.scss';

type AppLayoutProp = {
	children: ReactNode;
};

export default function AppLayout({ children }: AppLayoutProp) {
	return (
		<div className={s.container}>
			<header>Header</header>

			{children}
			<footer>Footer</footer>
		</div>
	);
}
