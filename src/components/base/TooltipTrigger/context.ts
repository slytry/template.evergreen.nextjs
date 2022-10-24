import { PlacementAxis } from '@react-types/overlays';
import { createContext, CSSProperties, RefObject } from 'react';
import { TooltipTriggerState } from 'react-stately';

interface TooltipContextProps {
	state?: TooltipTriggerState;
	placement?: PlacementAxis;
	ref?: RefObject<HTMLDivElement>;
	UNSAFE_style?: CSSProperties;
}

export const TooltipContext = createContext<TooltipContextProps>({});
