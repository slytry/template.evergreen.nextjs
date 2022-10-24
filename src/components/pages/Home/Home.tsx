import Head from 'next/head';
import { ReactElement } from 'react';

import { AdvantagesList } from './partials/AdvantageList';
import { Blog } from './partials/Blog';
import { EventsSection } from './partials/EventsSection';
import { NewProducts } from './partials/NewProducts';
import { PopularBrands } from './partials/PopularBrands';
import { PopularCategories } from './partials/PopularCategories';
import { TopSales } from './partials/TopSales';
import { TopSliders } from './partials/TopSliders';

const HomePage = ({ locale }): ReactElement => (
	<main>
		<Head>
			<title>Vertical - Home</title>
			<meta name="description" content="Home" />
		</Head>
		<p>{locale}</p>
		<TopSliders />
		<AdvantagesList />
		<TopSales />
		<NewProducts />
		<PopularCategories />
		<PopularBrands />
		<Blog />
		<EventsSection />
	</main>
);

export { HomePage };
