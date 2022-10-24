import cnBind from 'classnames/bind';
import React, { FC, ReactElement, useRef, useState } from 'react';

import { ControlArrowButtons } from 'components/shared/ControlArrowButtons';
import { ProductType } from 'lib/models/productCard/ProductCard.types';

import { Filters } from '../Filters';
import { ProductCard } from '../ProductCard';

import { ProductListProps } from './ProductList.types';

import styles from './ProductList.module.scss';

const cx = cnBind.bind(styles);

const ProductList: FC<ProductListProps> = ({
	className,
	products,
	filters,
}): ReactElement => {
	const [filter, setFilter] = useState<ProductType>(filters[1].value);
	const productsRef = useRef<HTMLDivElement>();

	const onPrev = (): void => {
		console.log(productsRef.current);
	};

	const onNext = (): void => {
		console.log(productsRef.current);
	};

	return (
		<div className={cx('ProductList', className)}>
			<div className={cx('ProductList__controls')}>
				<Filters
					filters={filters}
					onClick={setFilter}
					activeFilter={filter}
				/>
				<div className={cx('ProductList__buttons')}>
					<ControlArrowButtons
						onPrevClick={onPrev}
						onNextClick={onNext}
						variant="transparent"
					/>
				</div>
			</div>

			<div className={cx('ProductList__wrapper')}>
				{products.map((item, index) => {
					const { type } = item;
					return (
						type === filter && (
							<ProductCard
								title={item.title}
								src={item.src}
								price={item.price}
								type={item.type}
								info={item.info}
								key={index}
							/>
						)
					);
				})}
			</div>
		</div>
	);
};

export { ProductList };
