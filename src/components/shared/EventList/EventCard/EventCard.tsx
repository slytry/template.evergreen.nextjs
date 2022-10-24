import classNames from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { EventCardProps } from './EventCard.types';

import Calendar from 'public/icons/common/calendar.svg';

import styles from './EventCard.module.scss';

const cx = classNames.bind(styles);

const EventCard: React.FC<EventCardProps> = ({ className, src, date, title }) => (
	<div className={cx('EventCard', className)}>
		<Image src={src} alt="event" width={305} height={200} />
		<div className={cx('EventCard__date')}>
			<Calendar className={cx('EventCard__calendar')} />
			{date}
		</div>
		<p className={cx('EventCard__title')}>{title}</p>
		<Link href="/#">
			<a className={cx('EventCard__read-more')}>
				Читать новость
				<Image src="/icons/common/category-icon.svg" alt="event" width={6} height={12} />
			</a>
		</Link>
	</div>
);

export { EventCard };
