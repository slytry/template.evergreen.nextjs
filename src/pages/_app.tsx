/* eslint-disable global-require */
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Provider } from 'mobx-react';
import { appWithTranslation } from 'next-i18next';
import { useState } from 'react';
import { SSRProvider } from 'react-aria';
import { Toaster } from 'react-hot-toast';

import { AppLayout } from '@/layout/AppLayout';
import { config } from 'lib/config/react-query-config';
import { useStore } from 'store/RootStore';
import 'styles/document.scss';

if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
	import('../lib/mocks').then(({ initMocks }) => initMocks());
}

const App = ({ Component, pageProps }) => {
	const store = useStore(pageProps.initialState);
	const [queryClient] = useState(() => new QueryClient(config));
	return (
		<QueryClientProvider client={queryClient}>
			<Hydrate state={pageProps.dehydratedState}>
				<SSRProvider>
					<Provider store={store}>
						<AppLayout>
							<Component {...pageProps} />
							<Toaster position="top-right" />
						</AppLayout>
					</Provider>
				</SSRProvider>
			</Hydrate>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
};

export default appWithTranslation(App);
