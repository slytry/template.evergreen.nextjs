import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { ControlArrowButtons } from 'components/shared/ControlArrowButtons';
import { CATEGORIES } from 'lib/models';

import { PopularCategoryList } from './PopularCategoriesList';

import styles from './PopularCategories.module.scss';

const cx = cn.bind(styles);

const onPrev = (): void => {
	console.log('prev');
};

const onNext = (): void => {
	console.log('next');
};

const PopularCategories = (): ReactElement => (
	<section className={cx('PopularCategories')}>
		<div className={cx('PopularCategoriest__wrapper')}>
			<p className={cx('PopularCategories__title')}>Популярные категории</p>
			<ControlArrowButtons onPrevClick={onPrev} onNextClick={onNext} variant="transparent" />
		</div>
		<PopularCategoryList categories={CATEGORIES} />
	</section>
);

export { PopularCategories };
