/* eslint-disable @typescript-eslint/no-confusing-void-expression */
import { createContext, useContext } from 'react';

export const DataContext = createContext(undefined);

export const useDataContext = () => {
	const context = useContext(DataContext);
	if (context !== undefined) {
		return context;
	}

	throw new Error('RootContext broken');
};
