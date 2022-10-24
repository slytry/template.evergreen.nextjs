import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { SubCategoryBanner } from 'components/shared/SubCategoryBanner';

import styles from './SubCategories.module.scss';

const cx = cnBind.bind(styles);

interface SubCategoriesProps {
	mock: { id: number; title: string; src: string; link: string }[];
}

const SubCategories = ({ mock }: SubCategoriesProps): ReactElement => (
	<section className={cx('SubCategories')}>
		{mock.map((data) => (
			<SubCategoryBanner key={data.id} {...data} />
		))}
	</section>
);

export { SubCategories };
