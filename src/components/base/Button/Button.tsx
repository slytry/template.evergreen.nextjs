import { type ReactNode } from 'react';

import cx from './index.module.scss';

interface ButtonProps {
	className?: string;
	children: ReactNode;
}

const Button = ({ className, children }: ButtonProps) => (
	<button className={cx('Root', className)}>{children}</button>
);

export { Button };
