import cn from 'classnames/bind';
import { ReactElement } from 'react';

import ArrowSvg from 'public/icons/common/arrow-left-round.svg';

import styles from './SeeAll.module.scss';

const cx = cn.bind(styles);

export interface SeeAllProps {
	className?: string;
	isOpen?: boolean;
	onClick?: () => void;
}

const SeeAll = ({ className, isOpen = false, onClick }: SeeAllProps): ReactElement => {
	const content = isOpen ? 'Скрыть' : 'Смотреть еще';
	return (
		<button type="button" onClick={onClick} className={cx('SeeAll', className)}>
			<span className={cx('SeeAll__text')}>{content}</span>
			<ArrowSvg className={cx('SeeAll__arrow', { 'SeeAll__arrow--open': isOpen })} />
		</button>
	);
};

export { SeeAll };
