import { CheckboxGroupProps as CheckboxGroupSpectrumProps } from '@react-types/checkbox';
import cn from 'classnames/bind';
import { createContext, ReactElement, useContext } from 'react';
import { useCheckboxGroup } from 'react-aria';
import { useCheckboxGroupState, CheckboxGroupState } from 'react-stately';

import styles from './CheckboxGroup.module.scss';

const cx = cn.bind(styles);

interface CheckboxGroupProps extends CheckboxGroupSpectrumProps {
	children: ReactElement[] | ReactElement;
	label?: string;
	className?: string;
}

const CheckboxGroupContext = createContext<CheckboxGroupState>(null);

const CheckboxGroup = (props: CheckboxGroupProps): ReactElement => {
	const { children, label } = props;
	const state = useCheckboxGroupState(props);
	const { groupProps, labelProps } = useCheckboxGroup(props, state);

	return (
		<fieldset className={cx('CheckboxGroup', props.className)} {...groupProps}>
			<legend className={cx('CheckboxGroup__legend')} {...labelProps}>
				{label}
			</legend>
			<CheckboxGroupContext.Provider value={state}>{children}</CheckboxGroupContext.Provider>
		</fieldset>
	);
};

export { CheckboxGroup };

export function useCheckboxGroupContext(): CheckboxGroupState {
	const context = useContext(CheckboxGroupContext);
	if (!context) {
		throw new Error('This component must be used whithin a CheckboxGroup component');
	}
	return context;
}
