import cn from 'classnames/bind';
import Image from 'next/image';
import Link from 'next/link';
import React, { FC } from 'react';

import { EventList } from 'components/shared/EventList';
import { EVENTS } from 'lib/models';

import { AdvantageCardListProps } from './EventsSection.types';

import styles from './EventsSection.module.scss';

const cx = cn.bind(styles);

export const EventsSection: FC<AdvantageCardListProps> = ({ className }) => (
	<section className={cx('EventsSection', className)}>
		<div className={cx('EventsSection__container')}>
			<div className={cx('EventsSection__title-wrapper')}>
				<p className={cx('EventsSection__title')}>События компании</p>
				<Link href="#">
					<a className={cx('EventsSection__link')}>
						Смотреть все
						<Image
							alt="icon"
							width={6}
							height={12}
							src="/icons/common/category-icon.svg"
						/>
					</a>
				</Link>
			</div>
			<EventList events={EVENTS} />
		</div>
	</section>
);
