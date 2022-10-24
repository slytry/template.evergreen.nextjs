import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import Head from 'next/head';

import { Breadcrumbs, BreadcrumbItem } from '@/base/Breadсrumbs';
import { Heading } from '@/base/Heading';
import { ProductCardCatalog } from '@/shared/ProductCardCatalog';
import { CatalogSecondLevelMock } from 'lib/models/pages/CatalogSecondAndThirdLevel.data';
import { ProductCardCatalogMock } from 'lib/models/productCardCatalog/ProductCardCatalog.data';
import { useStore } from 'store/RootStore';

import { AccordionWithCategories } from './partials/AccordionWithCategories';
import { CategoryTabs } from './partials/CategoryTabs/CategoryTabs';
import { ControlPanel } from './partials/ControlPanel';
import { Form } from './partials/Form';

import styles from './CatalogAllLevel.module.scss';

const cx = cn.bind(styles);

const CARDS = ProductCardCatalogMock.getCardsArray(9);

const CatalogSecondLevel = () => {
	const {
		layoutStore: { isFiltersOpen, layoutMode },
	} = useStore();

	return (
		<main className={cx('CatalogAllLevel')}>
			<Head>
				<title>Vertical - Categories</title>
				<meta name="description" content="Vertical - Categories" />
			</Head>
			<Breadcrumbs className={cx('CatalogAllLevel__breadcrumbs')}>
				{CatalogSecondLevelMock.breadcrumbs.map(({ href, title }) => (
					<BreadcrumbItem key={href} href={href}>
						{title}
					</BreadcrumbItem>
				))}
			</Breadcrumbs>
			<Heading level="1" className={cx('CatalogAllLevel__heading')}>
				{CatalogSecondLevelMock.category.value}
			</Heading>

			<ControlPanel className={cx('CatalogAllLevel__controlPanel')} />
			<div className={cx('CatalogAllLevel__contentWrapper')}>
				<aside
					className={cx('CatalogAllLevel__aside', {
						'CatalogAllLevel__aside--hidden': !isFiltersOpen,
					})}
				>
					<AccordionWithCategories />
					<Form />
				</aside>
				<article className={cx('CatalogAllLevel__cards')}>
					<CategoryTabs tabs={CatalogSecondLevelMock.category.subcategories} />

					<section
						className={cx('CatalogAllLevel__cardsWrapper', {
							'CatalogAllLevel__cardsWrapper--horizontal':
								layoutMode === 'row',
						})}
					>
						{CARDS.map((card, idx) => (
							<ProductCardCatalog view={layoutMode} key={idx} {...card} />
						))}
					</section>
					<section className={cx('CatalogAllLevel__pagination')}>
						<div>Пагинация</div>
					</section>
				</article>
			</div>
		</main>
	);
};

const _CatalogSecondLevel = observer(CatalogSecondLevel);

export { _CatalogSecondLevel as CatalogSecondLevel };
