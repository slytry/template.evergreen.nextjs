/* eslint-disable @typescript-eslint/no-shadow */
import { useEffect, useState } from 'react';

interface ViewportSize {
	width: number;
	height: number;
}

const visualViewport = typeof window !== 'undefined' && window.visualViewport;

export function useViewportSize(): ViewportSize {
	const [size, setSize] = useState(() => getViewportSize());

	useEffect(() => {
		// Use visualViewport api to track available height even on iOS virtual keyboard opening
		const onResize = () => {
			setSize((size) => {
				const newSize = getViewportSize();
				if (newSize.width === size.width && newSize.height === size.height) {
					return size;
				}
				return newSize;
			});
		};

		if (!visualViewport) {
			window.addEventListener('resize', onResize);
		} else {
			visualViewport.addEventListener('resize', onResize);
		}

		return () => {
			if (!visualViewport) {
				window.removeEventListener('resize', onResize);
			} else {
				visualViewport.removeEventListener('resize', onResize);
			}
		};
	}, []);

	return size;
}

function getViewportSize(): ViewportSize {
	return {
		width: visualViewport?.width || window.innerWidth,
		height: visualViewport?.height || window.innerHeight,
	};
}
