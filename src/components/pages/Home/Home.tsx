import { useTranslation } from 'next-i18next';
import Head from 'next/head';

import { useTodosQuery } from 'lib/services/common.service';

const HomePage = () => {
	const { data } = useTodosQuery();
	const { t } = useTranslation(['custom']);
	return (
		<main>
			<Head>
				<title>{t('title')}</title>
				<meta name="description" content="Home page" />
			</Head>
			<ul>
				{data.todos.map((el) => {
					<li key={el.title}>{el.title}</li>;
				})}
			</ul>
		</main>
	);
};

export { HomePage };
