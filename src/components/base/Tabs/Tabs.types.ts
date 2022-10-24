// import { TabListProps as SpectrumTabListProps } from '@react-types/tabs';

import { TabListProps as STabListProps } from 'react-stately';

export interface ITabVariant {
	variant?: 'registration' | 'filter';
}

export interface TabListProps<T> extends STabListProps<T>, ITabVariant {}
