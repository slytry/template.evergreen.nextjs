import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';
import React from 'react';
import { QueryClient, QueryClientProvider, useQueryClient } from 'react-query';
import type { DefaultOptions } from 'react-query';

import 'src/styles/main.scss';
import { AppLayout } from '@/layout/AppLayout';

interface TProps {
	children: JSX.Element;
}

const queryClient = new QueryClient();

const ReactQueryConfigProvider = ({ children }: TProps) => {
	const client = useQueryClient();
	const [newClient] = React.useState(
		() =>
			new QueryClient({
				queryCache: client.getQueryCache(),
				mutationCache: client.getMutationCache(),
				defaultOptions: {
					queries: {
						enabled: true,
					},
				},
			})
	);

	return (
		<QueryClientProvider client={newClient}>{children}</QueryClientProvider>
	);
};

const App = ({ Component, pageProps }: AppProps) => (
	<AppLayout>
		<QueryClientProvider client={queryClient}>
			<ReactQueryConfigProvider>
				<Component {...pageProps} />
			</ReactQueryConfigProvider>
		</QueryClientProvider>
	</AppLayout>
);

export default appWithTranslation(App);
