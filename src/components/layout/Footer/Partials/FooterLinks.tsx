import cnBind from 'classnames/bind';
import React from 'react';

import styles from './FooterLinks.module.scss';

const cx = cnBind.bind(styles);

interface IFooterLinksProp {
	title?: string;
	links?: string[];
	className?: string;
}

export const FooterLinks = ({ title, links, className }: IFooterLinksProp) => (
	<div className={cx('FooterLinks')}>
		{title && <p className={cx('FooterLinks__heading', className)}>{title}</p>}
		<ul className={cx('FooterLinks__list')}>
			{links.map((el) => (
				<li className={cx('Footer__list-item')} key={el}>
					{el}
				</li>
			))}
		</ul>
	</div>
);
