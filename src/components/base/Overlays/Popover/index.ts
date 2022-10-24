import { PopoverProps as SpectrumPopoverProps } from '@react-types/overlays';
import { CSSProperties } from 'react';

export * from './Popover';

export interface PopoverProps extends SpectrumPopoverProps {
	style?: CSSProperties;
}
