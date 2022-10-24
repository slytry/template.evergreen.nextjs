import { Resources as MyResources } from './types/i18n.types';

import 'react-i18next';

declare module 'react-i18next' {
	interface CustomTypeOptions {
		defaultNS: 'common';
		returnNull: false;
		returnEmptyString: false;
		nsSeparator: ':';
		keySeparator: '.';
		jsonFormat: 'v4';
		allowObjectInHTMLChildren: false;
		resources: MyResources;
	}
}
