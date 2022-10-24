import { AriaButtonProps } from '@react-types/button';
import { ToggleState } from 'react-stately';

export interface ToggleButtonProps extends AriaButtonProps {
	state: ToggleState;
	className?: string;
}
