import { useCallback, useEffect, useRef, useState } from 'react';

export function useCountdown(seconds: number) {
	const sec = seconds || 59;
	const [timer, setTimer] = useState(+sec);
	const id = useRef(null);
	const clear = () => {
		window.clearInterval(id.current);
	};
	useEffect(() => {
		id.current = window.setInterval(() => {
			setTimer((time) => time - 1);
		}, 1000);
		return () => clear();
	}, [timer]);

	useEffect(() => {
		if (timer === 0) {
			clear();
		}
	}, [timer]);

	const reset = useCallback(() => {
		setTimer(+sec);
	}, []);

	return { timer, reset };
}
