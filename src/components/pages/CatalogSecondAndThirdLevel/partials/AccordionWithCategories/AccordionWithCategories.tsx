import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { Accordion } from '@/base/Accordion';
import { CurrentCategotyItem } from 'components/shared/CurrentCategotyItem';
import { CatalogSecondLevelMock } from 'lib/models/pages/CatalogSecondAndThirdLevel.data';

import styles from './AccordionWithCategories.module.scss';

const cx = cn.bind(styles);

const AccordionWithCategories = (): ReactElement => (
	<Accordion
		className={cx('AccordionWithCategories')}
		title="Категории товара"
		isExpanded
	>
		<CurrentCategotyItem
			className={cx('AccordionWithCategories__list')}
			categories={CatalogSecondLevelMock.category.subcategories}
		/>
	</Accordion>
);

export { AccordionWithCategories };
