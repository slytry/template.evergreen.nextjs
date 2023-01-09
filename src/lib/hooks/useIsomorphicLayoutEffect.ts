import { useEffect, useLayoutEffect } from 'react';

import useSsr from './useSsr';

const useIsomorphicLayoutEffect = () => {
	const { isBrowser } = useSsr();
	return isBrowser ? useLayoutEffect : useEffect;
};

export default useIsomorphicLayoutEffect;
