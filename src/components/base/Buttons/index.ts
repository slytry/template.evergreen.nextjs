/* eslint-disable import/no-cycle */
import { AriaButtonProps } from '@react-types/button';

export { Button } from './Button';
export { ToggleSwitch } from './ToggleSwitch';
export { ActionButton } from './ActionButton';
export { ToggleButton } from './ToggleButton';

export interface BaseButtonProps extends AriaButtonProps {
	className?: string;
	variant?: string;
	isActive?: boolean;
	fullWidth?: boolean;
}
