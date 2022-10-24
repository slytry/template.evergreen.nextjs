import cn from 'classnames/bind';

import styles from './Rating.module.scss';

const cx = cn.bind(styles);

interface RatingProps {
	className?: string;
	rating: string;
}

export const Rating = ({ rating, className }: RatingProps) => (
	<div className={cx('Rating', className)}>
		<img alt="Оранжевая звезда" src="/icons/common/rating-icon.svg" width={20} height={20} />
		<p>{rating}</p>
	</div>
);
