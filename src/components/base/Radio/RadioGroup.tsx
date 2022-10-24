/* eslint-disable react/jsx-no-constructed-context-values */
import { DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import { forwardRef } from 'react';
import { useRadioGroup } from 'react-aria';
import { useRadioGroupState } from 'react-stately';

import { useDOMRef } from 'utils/useDOMRef';

import { RadioGroupProps } from './Radio.types';
import { RadioContext } from './context';

import styles from './Radio.module.scss';

const cx = cn.bind(styles);

function RadioGroup(props: RadioGroupProps, ref: DOMRef<HTMLDivElement>) {
	const { label, children, variant = 'default' } = props;
	const domRef = useDOMRef(ref);

	const state = useRadioGroupState(props);
	const { radioGroupProps, labelProps } = useRadioGroup(
		{ ...props, orientation: 'horizontal' },
		state
	);

	return (
		<div
			{...radioGroupProps}
			className={cx('RadioGroup', `RadioGroup--${variant}`)}
			ref={domRef}
		>
			{label && <span {...labelProps}>{label}</span>}
			<div className={cx('RadioGroup__group', `RadioGroup__group--${variant}`)}>
				<RadioContext.Provider
					value={{
						state,
						variant,
					}}
				>
					{children}
				</RadioContext.Provider>
			</div>
		</div>
	);
}

/**
 * Radio groups allow users to select a single option from a list of mutually exclusive options.
 * All possible options are exposed up front for users to compare.
 */
const _RadioGroup = forwardRef(RadioGroup);
export { _RadioGroup as RadioGroup };
