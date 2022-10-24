import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { Accordion } from '@/base/Accordion';
import { Button } from '@/base/Buttons';

import { CheckboxGroupWithSearch } from '../CheckboxGroupWithSearch';
import { RangeSlider } from '../RangeSlider';
import { TotalCheckbox } from '../TotalCheckbox';

import styles from './Form.module.scss';

const cx = cn.bind(styles);

interface FormProps {
	className?: string;
}
/**
 * Компонент с фильтрами товаров
 */
const Form = ({ className }: FormProps): ReactElement => (
	<form className={cx('Form', className)}>
		<TotalCheckbox />
		<Accordion className={cx('Form__price')} title="Цена" isExpanded>
			<RangeSlider
				className={cx('Form__slider')}
				formatOptions={{ style: 'decimal' }}
				maxValue={30000}
				defaultValue={[0, 30000]}
				step={1}
				label="Цена"
			/>
		</Accordion>
		<CheckboxGroupWithSearch />
		<CheckboxGroupWithSearch />
		<Button className={cx('Form__resetButton')} type="reset" variant="gray">
			Очистить фильтры
		</Button>
	</form>
);

export { Form };
