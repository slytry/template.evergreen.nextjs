import { AriaButtonProps } from '@react-types/button';
import { CSSProperties } from 'react';

export * from './ActionButton';

export interface ActionButtonProps extends AriaButtonProps {
	className?: string;
	style?: CSSProperties;
	variant?: 'clear' | 'dark' | 'blue';
}
