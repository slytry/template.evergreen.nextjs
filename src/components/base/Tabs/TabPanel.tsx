import { DOMProps } from '@react-types/shared';
import cn from 'classnames/bind';
import { useRef } from 'react';
import { useTabPanel } from 'react-aria';
import { TabListState } from 'react-stately';

import { ITabVariant } from './Tabs.types';

import styles from './Tabs.module.scss';

const cx = cn.bind(styles);

export interface TabPanelsProps<T> extends DOMProps, ITabVariant {
	state: TabListState<T>;
}

function TabPanel<T>({ state, variant, ...props }: TabPanelsProps<T>) {
	const ref = useRef();
	const { tabPanelProps } = useTabPanel(props, state, ref);

	return (
		<div
			className={cx('Tabs__tabPanel', `Tabs__tabPanel--${variant}`)}
			{...tabPanelProps}
			tabIndex={-1}
			ref={ref}
		>
			{state.selectedItem?.props.children}
		</div>
	);
}

export { TabPanel };
