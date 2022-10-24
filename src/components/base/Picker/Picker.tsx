import { DOMRefValue, FocusableRefValue } from '@react-types/shared';
import cn from 'classnames/bind';
import { useCallback, useRef, useState } from 'react';
import { HiddenSelect, useSelect, useOverlayPosition } from 'react-aria';
import { useSelectState } from 'react-stately';

import { Popover } from '@/base/Overlays/Popover';
import { useUnwrapDOMRef } from 'utils/useDOMRef';
import { useLayoutEffect } from 'utils/useLayoutEffect';
import { useResizeObserver } from 'utils/useResizeObserver';

import { Button } from '../Buttons';
import { ListBoxBase } from '../ListBox';

import { SelectProps } from '.';

import Chevron from 'public/icons/common/Chevron_24.svg';
import TelChevron from 'public/icons/registration/tel-checron.svg';

import styles from './Picker.module.scss';

const cx = cn.bind(styles);

function Picker<T extends object>({ variant, ...props }: SelectProps<T>) {
	const state = useSelectState({ ...props, defaultSelectedKey: '0' });

	const popoverRef = useRef<DOMRefValue<HTMLDivElement>>();
	const unwrappedPopoverRef = useUnwrapDOMRef(popoverRef);
	const triggerRef = useRef<FocusableRefValue<HTMLElement>>();
	const unwrappedTriggerRef = useUnwrapDOMRef(triggerRef);
	let listboxRef = useRef();

	const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
		props,
		state,
		unwrappedTriggerRef
	);

	let { overlayProps } = useOverlayPosition({
		targetRef: unwrappedTriggerRef,
		overlayRef: unwrappedPopoverRef,
		isOpen: state.isOpen,
		onClose: state.close,
	});

	// Measure the width of the button to inform the width of the menu (below).
	let [buttonWidth, setButtonWidth] = useState(null);

	let onResize = useCallback(() => {
		if (unwrappedTriggerRef.current) {
			let width = unwrappedTriggerRef.current.offsetWidth;
			setButtonWidth(width);
		}
	}, [unwrappedTriggerRef, setButtonWidth]);

	useResizeObserver({
		ref: unwrappedTriggerRef,
		onResize,
	});

	useLayoutEffect(onResize, [state.selectedKey, onResize]);

	let style = {
		...overlayProps.style,
		width: buttonWidth,
	};

	return (
		<div
			className={cx('Picker', {
				'Picker--tel': variant === 'tel',
			})}
		>
			<div className={cx('Picker__label')} {...labelProps}>
				{props.label}
			</div>
			<HiddenSelect
				state={state}
				triggerRef={unwrappedTriggerRef}
				label={props.label}
				name={props.name}
			/>
			<Button
				{...triggerProps}
				variant="white"
				className={cx('Picker__button', {
					'Picker__button--tel': variant === 'tel',
				})}
				ref={triggerRef}
			>
				<span {...valueProps}>
					{state.selectedItem ? state.selectedItem.rendered : 'По популярности'}
				</span>
				{variant === 'tel' ? (
					<TelChevron aria-hidden="true" className={cx('Picker__chevron')} />
				) : (
					<Chevron aria-hidden="true" className={cx('Picker__chevron')} />
				)}
			</Button>
			{state.isOpen && (
				<Popover
					ref={popoverRef}
					isOpen={state.isOpen}
					onClose={state.close}
					style={style}
				>
					<ListBoxBase {...menuProps} ref={listboxRef} state={state} />
				</Popover>
			)}
		</div>
	);
}

export { Picker };
