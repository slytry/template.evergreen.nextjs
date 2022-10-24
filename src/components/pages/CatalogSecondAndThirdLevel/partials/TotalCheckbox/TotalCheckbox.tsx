import cn from 'classnames/bind';
import { ReactElement } from 'react';

import { Checkbox, CheckboxGroup } from '@/base/CheckboxGroup';

import styles from './TotalCheckbox.module.scss';

const cx = cn.bind(styles);

const TotalCheckbox = (): ReactElement => (
	<CheckboxGroup label="Выбрано" className={cx('TotalCheckbox')}>
		<Checkbox value="Выбрано">Выбрано</Checkbox>
	</CheckboxGroup>
);

export { TotalCheckbox };
