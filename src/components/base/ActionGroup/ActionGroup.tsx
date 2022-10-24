import { useActionGroup } from '@react-aria/actiongroup';
import { DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import React, { forwardRef, ReactElement } from 'react';
import { useListState } from 'react-stately';

import { useDOMRef } from 'utils/useDOMRef';

import { ActionGroupProps } from './ActionGroup.types';
import { ActionGroupItem } from './ActionGroupItem';

import styles from './ActionGroup.module.scss';

const cx = cn.bind(styles);

const ActionGroup = <T extends object>(props: ActionGroupProps<T>, ref: DOMRef<HTMLDivElement>) => {
	const { isDisabled, onAction, variant } = props;

	const domRef = useDOMRef(ref);

	const state = useListState({ ...props, suppressTextValueWarning: true });
	const { actionGroupProps } = useActionGroup(props, state, domRef);

	const children = Array.from(state.collection);

	return (
		<div {...actionGroupProps} ref={domRef} className={cx('ActionGroup')}>
			{children.map((item) => (
				<ActionGroupItem
					variant={variant}
					key={item.key}
					onAction={onAction}
					isDisabled={isDisabled}
					item={item}
					state={state}
				/>
			))}
		</div>
	);
};

const _ActionGroup = forwardRef(ActionGroup) as <T>(
	props: ActionGroupProps<T> & { ref?: DOMRef<HTMLDivElement> }
) => ReactElement;
export { _ActionGroup as ActionGroup };
