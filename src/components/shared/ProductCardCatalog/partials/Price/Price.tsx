import cn from 'classnames/bind';
import { useNumberFormatter } from 'react-aria';

import styles from './Price.module.scss';

const cx = cn.bind(styles);

interface PriceProps {
	purchase: {
		price: string;
		minimumPurchase: string;
		quantityInPackage: string;
	};
	view?: string;
}

export const Price = ({
	view,

	purchase: { price },
	purchase: { quantityInPackage },
}: PriceProps) => {
	const priceForPackage = +price * +quantityInPackage;
	const formatter = useNumberFormatter({
		style: 'currency',
		currency: 'RUB',
		minimumFractionDigits: 0,
	});

	return (
		<>
			<p>
				<span className={cx('Price__oneProduct')}>
					{formatter.format(+price)}/шт.
				</span>
				<s className={cx('Price__beforeSale')}>{formatter.format(12500)}</s>
			</p>
			<p>
				<span className={cx('Price__package')}>
					{formatter.format(priceForPackage)}/уп.
				</span>
				{view === 'row' && (
					<s className={cx('Price__beforeSale')}>{formatter.format(12500)}</s>
				)}
			</p>
		</>
	);
};
