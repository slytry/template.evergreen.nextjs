import cn from 'classnames/bind';
import { ReactElement } from 'react';

import styles from './AppLayout.module.scss';

const cx = cn.bind(styles);

interface AppLayoutProps {
	children: ReactElement;
}

const AppLayout = ({ children }: AppLayoutProps) => (
	<div className={cx('Layout')}>{children}</div>
);

export { AppLayout };
