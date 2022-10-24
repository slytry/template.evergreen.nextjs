import classNames from 'classnames/bind';
import React from 'react';

import { EventCard } from './EventCard';
import { EventListProps } from './EventList.types';

import styles from './EventList.module.scss';

const cx = classNames.bind(styles);

const EventList: React.FC<EventListProps> = ({ className, events }) => (
	<div className={cx('EventList', className)}>
		{events.map((event, index) => (
			<EventCard {...event} key={index} />
		))}
	</div>
);

export { EventList };
