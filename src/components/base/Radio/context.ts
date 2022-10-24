import { createContext, useContext } from 'react';
import { RadioGroupState } from 'react-stately';

interface RadioGroupContext {
	name?: string;
	state: RadioGroupState;
	variant: 'default' | 'switch';
}

export const RadioContext = createContext<RadioGroupContext | null>(null);

export function useRadioProvider(): RadioGroupContext {
	return useContext(RadioContext);
}
