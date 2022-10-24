import cn from 'classnames/bind';
import Image from 'next/image';
import React, { FC } from 'react';

import { AdvantageCardProps } from './AdvantageCard.types';

import styles from './AdvantageCard.module.scss';

const cx = cn.bind(styles);

export const AdvantageCard: FC<AdvantageCardProps> = ({ className, src, text }) => (
	<div className={cx('AdvantageCard', className)}>
		<div className={cx('AdvantageCard__image-wrapper')}>
			<Image src={src} width={24} height={24} alt="advantage" />
		</div>
		<div className={cx('AdvantageCard__text')}>{text}</div>
	</div>
);
