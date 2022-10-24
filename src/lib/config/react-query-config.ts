export const config = {
	defaultOptions: {
		queries: {
			staleTime: 1 * 60 * 60 * 1000, // 1 hour
			cacheTime: 5 * 60 * 60 * 1000, // 5 hours
			refetchOnmount: false,
			refetchOnReconnect: false,
			retry: 1,
			refetchOnWindowFocus: false,
		},
	},
};
