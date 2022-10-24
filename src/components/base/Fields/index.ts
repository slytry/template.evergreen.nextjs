import {
	AriaLabelingProps,
	AriaValidationProps,
	FocusableDOMProps,
	FocusableProps,
	HelpTextProps,
	InputBase,
	LabelableProps,
	PressEvents,
	SpectrumLabelableProps,
	SpectrumTextInputBase,
	TextInputBase,
	TextInputDOMProps,
	Validation,
	ValueBase,
} from '@react-types/shared';
import { ReactNode, RefObject } from 'react';

export * from './PasswordField';

export interface TextFieldPropsSpectrum
	extends InputBase,
		Validation,
		HelpTextProps,
		FocusableProps,
		TextInputBase,
		ValueBase<string>,
		LabelableProps {}

interface AriaTextFieldProps
	extends TextFieldPropsSpectrum,
		AriaLabelingProps,
		FocusableDOMProps,
		TextInputDOMProps,
		AriaValidationProps {
	'aria-activedescendant'?: string;
	'aria-autocomplete'?: 'none' | 'inline' | 'list' | 'both';
	'aria-haspopup'?: boolean | 'false' | 'true' | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
}

export interface TextFieldBaseProps
	extends PressEvents,
		SpectrumTextInputBase,
		AriaTextFieldProps,
		SpectrumLabelableProps {
	togglePasswordVisiblity?: () => void;
	passwordShown?: boolean;
	inputClassName?: string;
	className?: string;
	inputRef?: RefObject<HTMLInputElement>;
	renderComponent?: () => ReactNode;
	hiddenLabel?: boolean;
}

export interface TextFieldWithHelpProps
	extends PressEvents,
		SpectrumTextInputBase,
		AriaTextFieldProps,
		SpectrumLabelableProps {
	helpText?: ReactNode | string;
	className?: string;
}

export interface TextFieldPasswordProps extends TextFieldBaseProps {
	togglePasswordVisiblity?: () => void;
	passwordShown?: boolean;
}
export interface PhoneFieldProps extends TextFieldBaseProps {}
export interface PasswordFieldProps extends TextFieldBaseProps {}
