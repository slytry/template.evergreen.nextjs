import { Resources } from '../types/i18n.types';

import 'react-i18next';
declare module 'react-i18next' {
	export interface CustomTypeOptions {
		resources: Resources;
	}
}
