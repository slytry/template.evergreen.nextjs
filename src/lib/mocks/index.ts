async function initMocks() {
	const onUnhandledRequest = 'bypass';

	if (typeof window === 'undefined') {
		const { server } = await import('./server');
		server.listen({ onUnhandledRequest });
	} else {
		const { worker } = await import('./browser');
		worker.start({ onUnhandledRequest });
	}
}

export { initMocks };
