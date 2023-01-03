import { type ReactElement } from 'react';

// Import styles from './AppLayout.module.scss';

type AppLayoutProps = {
	children: ReactElement;
};

const AppLayout = ({ children }: AppLayoutProps) => (
	<div className={'Layout'}>{children}</div>
);

export { AppLayout };
