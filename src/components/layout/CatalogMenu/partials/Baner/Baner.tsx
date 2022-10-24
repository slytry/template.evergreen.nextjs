import cn from 'classnames/bind';
import { ReactElement } from 'react';

import styles from './Baner.module.scss';

const cx = cn.bind(styles);
interface BanerProps {
	baner: {
		heading: string;
		text: string;
		image: string;
	};
	className?: string;
}

const Baner = ({ className, baner }: BanerProps): ReactElement => (
	<div className={cx('Baner', className)}>
		<h2 className={cx('Baner__heading')}>{baner.heading}</h2>
		<p className={cx('Baner__text')}> {baner.text}</p>
		<img
			className={cx('Baner__img')}
			src={baner.image}
			width="255"
			height="181"
			alt="Садовая тележка с инструментами"
		/>
	</div>
);

export { Baner };
