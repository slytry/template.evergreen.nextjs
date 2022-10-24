import { useEffect } from 'react';

export const useDebugForm = (watch, errors, OTHERS: Array<any> = []) => {
	useEffect(() => {
		const subscription = watch((value, { name, type }) => {
			console.group(['REACT-HOOK-FORM']);
			console.group(['VALUE']);
			console.log('value:', JSON.stringify(value));
			console.log('name:', name);
			console.log('type:', type);
			console.groupEnd();
			console.group(['ERRORS']);
			console.log(errors);
			console.groupEnd();
			console.group(['OTHERS']);
			OTHERS.map((v, i) => console.log(i, v));
			console.groupEnd();
			console.groupEnd();
		});
		return () => subscription.unsubscribe();
	}, [watch]);
};
