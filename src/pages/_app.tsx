/* eslint-disable global-require */
import {
	Hydrate,
	QueryClient,
	QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { appWithTranslation } from 'next-i18next';
import { useState } from 'react';

import { AppLayout } from '@/layout/AppLayout';
import { config } from 'lib/config/react-query-config';
import 'styles/document.scss';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	import('../lib/mocks').then(({ initMocks }) => initMocks());
}

const App = ({ Component, pageProps }) => {
	const [queryClient] = useState(() => new QueryClient(config));
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<AppLayout>
					<Component {...pageProps} />
				</AppLayout>
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default appWithTranslation(App);
