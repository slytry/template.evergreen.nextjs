import cn from 'classnames/bind';
import Head from 'next/head';
import { ReactElement } from 'react';

import { Breadcrumbs, BreadcrumbItem } from '@/base/Breadсrumbs';
import { Button } from '@/base/Buttons';
import { Heading } from '@/base/Heading';
import { TopSales } from '@/pages/CatalogFirst/partials/TopSales';
import { CurrentCategoryList } from '@/shared/CurrentCategoryList';
import { CatalogFirstData } from 'lib/models/pages/CatalogFirst.data';

import { mockSub, mockCommon } from './SubCategories.data';
import { NewProducts } from './partials/NewProducts';
import { Promo } from './partials/Promo';
import { SubCategories } from './partials/SubCategories';

import styles from './CatalogFirst.module.scss';

const cx = cn.bind(styles);

const CatalogFirst = (): ReactElement => (
	<main className={cx('CatalogFirst')}>
		<Head>
			<title>Vertical - catalog</title>
			<meta name="description" content="Catalog" />
		</Head>
		<Breadcrumbs className={cx('CatalogFirst__breadcrumbs')}>
			{CatalogFirstData.breadcrumbs.map(({ href, title }) => (
				<BreadcrumbItem key={href} href={href}>
					{title}
				</BreadcrumbItem>
			))}
		</Breadcrumbs>
		<div className={cx('CatalogFirst__wrapper')}>
			<aside className={cx('CatalogFirst__leftBar')}>
				<CurrentCategoryList
					currentCategories={
						CatalogFirstData.categories.subcategories
					}
					className={cx('CatalogFirst__CategoryList')}
					variant="category"
				/>
			</aside>
			<article className={cx('CatalogFirst__mainContent')}>
				<Heading className={cx('CatalogFirst__heading')} level="1">
					{CatalogFirstData.categories.value}
				</Heading>
				<SubCategories mock={mockSub} />
				<Promo slides={CatalogFirstData.slidesPromo} />
				<Heading className={cx('CatalogFirst__heading')} level="1">
					Популярные категории
				</Heading>
				<SubCategories mock={mockCommon} />
				<NewProducts slides={CatalogFirstData.slidesProduct} />
				<TopSales />
				<Button className={cx('CatalogFirst__seAll')} variant="gray">
					Смотреть все товары
				</Button>
			</article>
		</div>
	</main>
);
export { CatalogFirst };
