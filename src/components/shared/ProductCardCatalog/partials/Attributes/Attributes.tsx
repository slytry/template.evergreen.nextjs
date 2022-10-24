import cn from 'classnames/bind';

import { AttributesItem } from './AttributesItem';

import styles from './Attributes.module.scss';

const cx = cn.bind(styles);

interface AttributesProps {
	className: string;
	attributes: {
		label: string;
		values: { label: string; value: string }[];
	}[];
}

const Attributes = ({ className, attributes }: AttributesProps) => (
	<div className={cx('Attributes', className)}>
		<div className={cx('Attributes__labels')}>
			{attributes.map(({ label }) => (
				<p key={label} className={cx('Attributes__label')}>
					{label}:
				</p>
			))}
		</div>
		<div className={cx('Attributes__parameters')}>
			{attributes.map(({ label, values }) => (
				<AttributesItem values={values} key={label} />
			))}
		</div>
	</div>
);

export { Attributes };
