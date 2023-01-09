import type { AppProps } from 'next/app';

import { AppLayout } from '@/components/layout/AppLayout';

import '@/styles/main.scss';

const App = ({ Component, pageProps }: AppProps) => (
	<AppLayout>
		<Component {...pageProps} />
	</AppLayout>
);

export default App;
