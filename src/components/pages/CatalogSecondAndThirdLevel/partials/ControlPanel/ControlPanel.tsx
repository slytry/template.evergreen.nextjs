import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import { Item } from 'react-stately';

import { ToggleSwitch } from '@/base/Buttons';
import { Picker } from '@/base/Picker';
import { Radio, RadioGroup } from '@/base/Radio';
import { CatalogSecondLevelMock } from 'lib/models/pages/CatalogSecondAndThirdLevel.data';
import { useStore } from 'store/RootStore';

import GridSvg from 'public/icons/grid.svg';
import RowSvg from 'public/icons/rows.svg';

import styles from './ControlPanel.module.scss';

const cx = cn.bind(styles);

interface ControlPanelProps {
	className?: string;
}

const ControlPanel = ({ className }: ControlPanelProps) => {
	const {
		layoutStore: {
			changeCardsLayoutMode,
			isFiltersOpen,
			layoutMode,
			toggleFilters,
		},
	} = useStore();

	return (
		<section className={cx('ControlPanel', className)}>
			<ToggleSwitch
				defaultSelected={isFiltersOpen}
				onChange={toggleFilters}
				className={cx('ControlPanel__toggle')}
			>
				Показывать фильтры
			</ToggleSwitch>
			<div className={cx('ControlPanel__righSide')}>
				<Picker>
					{CatalogSecondLevelMock.pickerOptions.map((item) => (
						<Item key={item.option}>{item.option}</Item>
					))}
				</Picker>

				<RadioGroup
					aria-label="Change card view"
					value={layoutMode}
					onChange={changeCardsLayoutMode}
					variant="switch"
				>
					<Radio aria-label="grid" value="grid">
						<GridSvg />
					</Radio>
					<Radio aria-label="row" value="row">
						<RowSvg />
					</Radio>
				</RadioGroup>
			</div>
		</section>
	);
};

const _ControlPanel = observer(ControlPanel);
export { _ControlPanel as ControlPanel };
