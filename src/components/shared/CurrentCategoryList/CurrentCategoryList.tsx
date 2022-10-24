import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { SeeAll } from '@/base/SeeAll';
import { TCategoryItem } from 'lib/models/catalogMenu/CatalogMenu.types';
import { useToggle } from 'utils/useToogle';

import { CurrentCategotyItem } from '../CurrentCategotyItem/CurrentCategotyItem';

import styles from './CurrentCategoryList.module.scss';

const cx = cn.bind(styles);

interface CurrentCategoryListProps {
	className?: string;
	currentCategories: TCategoryItem[] | null;
	variant: 'catalog' | 'category';
}

const CurrentCategoryList = ({
	className,
	currentCategories,
	variant,
}: CurrentCategoryListProps): ReactElement => {
	const [isOpen, toggleIsOpen] = useToggle(false);

	const categories = currentCategories.map((item) => (
		<CurrentCategotyItem
			className={cx('CurrentCategoryList__item', `CurrentCategoryList__item--${variant}`)}
			key={item.id}
			heading={item.value}
			categories={item.subcategories}
			link={item.link}
		/>
	));

	return (
		<div className={cx('CurrentCategoryList', `CurrentCategoryList--${variant}`, className)}>
			{categories}
			{variant === 'category' && <SeeAll isOpen={isOpen} onClick={toggleIsOpen} />}
		</div>
	);
};
export { CurrentCategoryList };
