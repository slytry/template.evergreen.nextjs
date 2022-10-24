import { FocusableRef } from '@react-types/shared';
import { useHover, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';

import { useFocusableRef } from 'utils/useDOMRef';

import { ToggleButtonProps } from './ToggleButton.types';

export const useSplitCode = (props: ToggleButtonProps, ref: FocusableRef<HTMLButtonElement>) => {
	const { isDisabled, state } = props;
	const domRef = useFocusableRef(ref);
	const defaultState = useToggleState(props);
	const buttonState = state ?? defaultState;

	const { buttonProps } = useToggleButton(props, buttonState, domRef);
	const { hoverProps, isHovered } = useHover({ isDisabled });

	return {
		buttonProps,
		hoverProps,
		isHovered,
		domRef,
		buttonState,
	};
};
