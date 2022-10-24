import cn from 'classnames/bind';
import React, { ReactElement, useRef, useState } from 'react';
import { useTabList, useFocusRing, mergeProps } from 'react-aria';
import { useTabListState } from 'react-stately';

import { Tab } from './Tab';
import { TabPanel } from './TabPanel';
import { TabListProps } from './Tabs.types';

import styles from './Tabs.module.scss';

const cx = cn.bind(styles);

const Tabs = ({
	variant = 'filter',
	...props
}: TabListProps<ReactElement>): ReactElement => {
	const state = useTabListState(props);

	const ref = useRef<HTMLDivElement>(null);
	const { tabListProps } = useTabList(props, state, ref);
	const [activeTabStyle, setActiveTabStyle] = useState({
		width: 0,
		transform: 'translateX(0)',
	});

	const { focusProps, isFocusVisible } = useFocusRing({
		within: true,
	});

	const handleActive = (tab: HTMLDivElement) => {
		setActiveTabStyle({
			width: tab?.offsetWidth,
			transform: `translateX(${tab?.offsetLeft}px)`,
		});
	};

	return (
		<div className={cx('Tabs')}>
			<div
				className={cx(
					'Tabs__tablistContainer',
					`Tabs__tablistContainer--${variant}`
				)}
			>
				<div
					className={cx(
						'Tabs__tabSelection',
						`Tabs__tabSelection--${variant}`,
						{
							'is-focused': isFocusVisible,
						}
					)}
					style={{ ...activeTabStyle }}
				/>
				<div
					className={cx('Tabs__tablist', `Tabs__tablist--${variant}`)}
					{...mergeProps(tabListProps, focusProps)}
					ref={ref}
				>
					{Array.from(state.collection).map((item) => (
						<Tab
							key={item.key}
							item={item}
							state={state}
							onActive={handleActive}
							variant={variant}
						/>
					))}
				</div>
			</div>
			<TabPanel key={state.selectedItem?.key} state={state} variant={variant} />
		</div>
	);
};

export { Tabs };
