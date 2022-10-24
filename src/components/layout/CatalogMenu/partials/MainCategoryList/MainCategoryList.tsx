import cn from 'classnames/bind';
import { ReactElement, useState } from 'react';

import styles from './MainCategoryList.module.scss';

const cx = cn.bind(styles);

interface MainCategoryListProps {
	mainCategories: { id: string; value: string }[];
	className?: string;
}
const MainCategoryList = ({ className, mainCategories }: MainCategoryListProps): ReactElement => {
	const firstItemId = mainCategories[0].id;
	const [activeItem, setactiveItem] = useState(firstItemId);

	const listItems = mainCategories.map((category) => (
		<li
			role="presentation"
			onClick={() => {
				setactiveItem(category.id);
			}}
			className={cx('MainCategoryList__item', {
				'MainCategoryList__item--active': activeItem === category.id,
			})}
			key={category.id}
		>
			{category.value}
		</li>
	));

	return (
		<div className={cx('MainCategoryList', className)}>
			<ul className={cx('MainCategoryList__list')}>{listItems}</ul>
		</div>
	);
};

export { MainCategoryList };
