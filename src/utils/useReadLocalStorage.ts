import { useCallback, useEffect, useState } from 'react';

import useEventListener from './useEventListener';

type Value<T> = T | null;

function useReadLocalStorage<T>(key: string): Value<T> {
	// Get from local storage then
	// parse stored json or return initialValue
	const readValue = useCallback((): Value<T> => {
		// Prevent build error "window is undefined" but keep keep working
		if (typeof window === 'undefined') {
			return null;
		}

		try {
			const item = window.localStorage.getItem(key);
			return item ? (JSON.parse(item) as T) : null;
		} catch (error) {
			console.warn(`Error reading localStorage key “${key}”:`, error);
			return null;
		}
	}, [key]);

	const [storedValue, setStoredValue] = useState<Value<T>>(readValue);

	useEffect(() => {
		setStoredValue(readValue());
	}, []);

	const handleStorageChange = useCallback(
		(event: StorageEvent | CustomEvent) => {
			if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
				return;
			}
			setStoredValue(readValue());
		},
		[key, readValue]
	);

	useEventListener('storage', handleStorageChange);

	useEventListener('local-storage', handleStorageChange);

	return storedValue;
}

export default useReadLocalStorage;
