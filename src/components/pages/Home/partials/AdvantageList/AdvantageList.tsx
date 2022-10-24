import cn from 'classnames/bind';
import React, { FC } from 'react';

import { ADVANTAGES } from 'lib/models';

import { AdvantageCard } from './AdvantageCard';
import { AdvantageCardListProps } from './AdvantageList.types';

import styles from './AdvantageList.module.scss';

const cx = cn.bind(styles);

export const AdvantagesList: FC<AdvantageCardListProps> = ({ className }) => (
	<section className={cx('AdvantagesList', className)}>
		{ADVANTAGES.map((item, index) => (
			<AdvantageCard
				key={index}
				className={cx('AdvantagesList__item')}
				text={item.text}
				src={item.src}
			/>
		))}
	</section>
);
