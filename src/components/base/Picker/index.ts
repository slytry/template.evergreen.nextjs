import { SelectProps as SpectrumSelectProps } from '@react-types/select';

export * from './Picker';

export interface SelectProps<T> extends SpectrumSelectProps<T> {
	name?: string;
	variant?: 'main' | 'tel';
}
