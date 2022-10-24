import { DOMProps, Node } from '@react-types/shared';
import cn from 'classnames/bind';
import { useEffect, useRef } from 'react';
import { useTab } from 'react-aria';
import { TabListState } from 'react-stately';

import { ITabVariant } from './Tabs.types';

import styles from './Tabs.module.scss';

const cx = cn.bind(styles);

interface TabProps<T> extends DOMProps, ITabVariant {
	item: Node<T>;
	state: TabListState<T>;
	isDisabled?: boolean;
	onActive(tab: HTMLDivElement): void;
}

function Tab<T>({ item, state, onActive, variant }: TabProps<T>) {
	const ref = useRef();
	const { tabProps } = useTab(item, state, ref);

	useEffect(() => {
		if (tabProps['aria-selected']) {
			onActive(ref.current);
		}
	}, [tabProps['aria-selected']]);

	return (
		<div className={cx('Tabs__tab', `Tabs__tab--${variant}`)} {...tabProps} ref={ref}>
			{item.rendered}
		</div>
	);
}

export { Tab };
