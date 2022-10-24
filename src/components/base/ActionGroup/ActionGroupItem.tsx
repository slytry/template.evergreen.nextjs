import { useActionGroupItem } from '@react-aria/actiongroup';
import { PressResponder } from '@react-aria/interactions';
import { DOMProps, Node, StyleProps } from '@react-types/shared';
import cn from 'classnames/bind';
import React, { Key, useRef } from 'react';
import { mergeProps, useHover } from 'react-aria';
import { ListState } from 'react-stately';

import { ActionButton } from '@/base/Buttons';
import { filterDOMProps } from 'utils/filterDOMProps';

import styles from './ActionGroup.module.scss';

const cx = cn.bind(styles);

interface ActionGroupItemProps<T> extends DOMProps, StyleProps {
	item: Node<T>;
	state: ListState<T>;
	isDisabled: boolean;
	onAction: (key: Key) => void;
	variant?: string;
}

export function ActionGroupItem<T>({
	item,
	state,
	isDisabled,
	onAction,
	variant = 'default',
}: ActionGroupItemProps<T>) {
	const ref = useRef();
	let { buttonProps } = useActionGroupItem({ key: item.key }, state);

	isDisabled = isDisabled || state.disabledKeys.has(item.key);

	const isSelected = state.selectionManager.isSelected(item.key);

	const { hoverProps } = useHover({ isDisabled });
	const domProps = filterDOMProps(item.props);

	if (onAction && !isDisabled) {
		buttonProps = mergeProps(buttonProps, {
			onPress: () => onAction(item.key),
		});
	}

	const button = (
		<PressResponder {...mergeProps(buttonProps, hoverProps, domProps)}>
			<ActionButton
				ref={ref}
				className={cx(`ActionGroupItem--${variant}`, {
					[`ActionGroupItem--isSelected-${variant}`]: isSelected,
				})}
				isDisabled={isDisabled}
				aria-label={item['aria-label']}
			>
				{item.rendered}
			</ActionButton>
		</PressResponder>
	);

	return button;
}
