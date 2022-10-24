import cn from 'classnames/bind';
import React, { ReactElement } from 'react';

import styles from './Heading.module.scss';

const cx = cn.bind(styles);

interface HeadingProps {
	children: React.ReactNode;
	level: '1' | '2' | '3' | '4' | '5' | '6';
	className?: string;
}

type HeadingTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export const Heading = ({ children, level, className = '' }: HeadingProps): ReactElement => {
	const Tag = `h${level}` as HeadingTag;

	return <Tag className={cx('Heading', `Heading--level${level}`, className)}>{children}</Tag>;
};
