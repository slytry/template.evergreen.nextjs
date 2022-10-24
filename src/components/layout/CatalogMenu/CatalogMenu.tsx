import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { CurrentCategoryList } from 'components/shared/CurrentCategoryList';
import { CatalogMenuData } from 'lib/models/catalogMenu/CatalogMenu.data';

import { Baner } from './partials/Baner';
import { HeadingCategory } from './partials/HeadingCategory';
import { MainCategoryList } from './partials/MainCategoryList';

import styles from './CatalogMenu.module.scss';

const cx = cn.bind(styles);

const CatalogMenu = (): ReactElement => (
	<div className={cx('catalogMenu')} id="catalogMenu">
		<div className={cx('catalogMenu__container')}>
			<MainCategoryList mainCategories={CatalogMenuData.categories} />
			<div className={cx('catalogMenu__rightSideWrapper')}>
				<HeadingCategory href={CatalogMenuData.categories[0].link}>
					{CatalogMenuData.categories[0].value}
				</HeadingCategory>

				<div className={cx('catalogMenu__currentCategoriesWrapper')}>
					<CurrentCategoryList
						currentCategories={CatalogMenuData.categories[0].subcategories}
						className={cx('CatalogPage__CategoryList')}
						variant="catalog"
					/>
					<Baner baner={CatalogMenuData.baner} />
				</div>
			</div>
		</div>
	</div>
);

export { CatalogMenu };
