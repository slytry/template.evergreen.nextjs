import { ToggleProps } from '@react-types/checkbox';
import { AriaCheckboxProps } from 'react-aria';

export * from './SimpleCheckbox';

export interface SimpleCheckboxProps extends AriaCheckboxProps, ToggleProps {}
