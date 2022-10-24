import {
	DOMProps,
	FocusableProps,
	InputBase,
	LabelableProps,
	Validation,
	ValueBase,
} from '@react-types/shared';
import { ReactElement, ReactNode } from 'react';

export interface RadioGroupProps
	extends ValueBase<string>,
		InputBase,
		Validation,
		LabelableProps,
		DOMProps {
	/**
	 * The name of the RadioGroup, used when submitting an HTML form.
	 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#name_and_radio_buttons).
	 */
	name?: string;
	/**
	 * The Radio(s) contained within the RadioGroup.
	 */
	children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
	variant: 'default' | 'switch';
}

export interface RadioProps extends FocusableProps, DOMProps {
	/**
	 * The value of the radio button, used when submitting an HTML form.
	 * See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Value).
	 */
	value: string;
	/**
	 * The label for the Radio. Accepts any renderable node.
	 */
	children?: ReactNode;
	/**
	 * Whether the radio button is disabled or not.
	 * Shows that a selection exists, but is not available in that circumstance.
	 */
	isDisabled?: boolean;
}
