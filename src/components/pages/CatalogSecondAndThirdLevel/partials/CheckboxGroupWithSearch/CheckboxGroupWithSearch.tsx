import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { Accordion } from '@/base/Accordion';
import { Checkbox, CheckboxGroup } from '@/base/CheckboxGroup';
import { SearchField } from '@/base/SearchField';
import { SeeAll } from '@/base/SeeAll';
import { CatalogSecondLevelMock } from 'lib/models/pages/CatalogSecondAndThirdLevel.data';
import { useToggle } from 'utils/useToogle';

import styles from './CheckboxGroupWithSearch.module.scss';

const cx = cn.bind(styles);

const CheckboxGroupWithSearch = (): ReactElement => {
	const [state, toggle] = useToggle();
	return (
		<Accordion className={cx('CheckboxGroupWithSearch')} title="Тип товара" isExpanded>
			<SearchField
				className={cx('CheckboxGroupWithSearch__input')}
				label="Поиск товаров"
				onSubmit={(text) => alert(text)}
				placeholder="Искать товары"
			/>
			<CheckboxGroup
				label="Фильтр товаров"
				className={cx('CheckboxGroupWithSearch__checkboxGroup')}
			>
				{CatalogSecondLevelMock.productTypes.map(({ type }) => (
					<Checkbox key={type} value={type}>
						{type}
					</Checkbox>
				))}
			</CheckboxGroup>
			<SeeAll isOpen={state} onClick={toggle} />
		</Accordion>
	);
};

export { CheckboxGroupWithSearch };
