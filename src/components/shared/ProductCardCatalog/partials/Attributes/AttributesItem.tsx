import cn from 'classnames/bind';
import { Key, SetStateAction, useState } from 'react';
import { Item } from 'react-stately';

import { ActionGroup } from '@/base/ActionGroup/ActionGroup';

import styles from './Attributes.module.scss';

const cx = cn.bind(styles);

interface AttributesItemProps {
	values: { label: string; value: string }[];
}

export function AttributesItem({ values }: AttributesItemProps) {
	const firtsElem = values[0]?.value;
	const [selected, setSelected] = useState<'all' | Set<Key>>(new Set([firtsElem]));
	const isColorPicker = firtsElem[0] === '#';
	const variant = isColorPicker ? 'color' : 'default';

	type Selection = SetStateAction<'all' | Set<Key>>;
	const changeHendler = (value: Selection) => setSelected(value);

	return (
		<ActionGroup
			aria-label="Product artibbutes"
			selectionMode="single"
			selectedKeys={selected}
			onSelectionChange={changeHendler}
			disallowEmptySelection
			variant={variant}
		>
			{values.map((item) => (
				<Item aria-label={item.label} key={item.label}>
					{isColorPicker ? (
						<span
							className={cx('AttributesItem__colorCircle')}
							style={{ backgroundColor: item.value }}
						/>
					) : (
						item.value
					)}
				</Item>
			))}
		</ActionGroup>
	);
}
