import cnBind from 'classnames/bind';
import { FC, ReactElement } from 'react';

import { Button } from '@/base/Buttons';

import { FiltersProps } from './Filters.types';

import styles from './Filters.module.scss';

const cx = cnBind.bind(styles);

const Filters: FC<FiltersProps> = ({ className, filters, onClick, activeFilter }): ReactElement => {
	const handleClick = (e) => {
		const { value } = e.target.dataset;
		onClick(value);
	};

	return (
		<div className={cx('Filters', className)}>
			{filters.map((filter, index) => (
				<Button
					className={cx('Filters__item', {
						'Filters__item--active': activeFilter === filter.value,
					})}
					key={index}
					data-value={filter.value}
					onPress={handleClick}
					variant="white"
				>
					{filter.text}
				</Button>
			))}
		</div>
	);
};

export { Filters };
