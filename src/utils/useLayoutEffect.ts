import { useLayoutEffect as ReactUseLayoutEffect, useEffect } from 'react';

export const useLayoutEffect =
	typeof window !== 'undefined' ? ReactUseLayoutEffect : useEffect;
