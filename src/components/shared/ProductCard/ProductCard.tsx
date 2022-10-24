import cn from 'classnames/bind';
import Image from 'next/image';
import { FC, ReactElement } from 'react';

import { Button } from '@/base/Buttons';
import { ProductCardProps } from 'lib/models/productCard/ProductCard.types';

import { FavoriteAndComparisonButtons } from '../FavoriteAndComparisonButtons';

import styles from './ProductCard.module.scss';

const cx = cn.bind(styles);

const ALERT_IMAGES = {
	green: '/icons/common/new-icon.svg',
	orange: '/icons/common/action-icon.svg',
};

export const ProductCard: FC<ProductCardProps> = ({
	className,
	price,
	src,
	title,
	alerts,
	info: { rating, article },
}): ReactElement => (
	<div className={cx('ProductCard', className)}>
		<div className={cx('ProductCard__wrapper')}>
			{alerts && (
				<div className={cx('ProductCard__alerts')}>
					{alerts.map((alert, index) => (
						<div
							className={cx(
								'ProductCard__alert-wrapper',
								`ProductCard__alert-wrapper--${alert.type}`
							)}
							key={index}
						>
							<Image
								src={ALERT_IMAGES[alert.type]}
								alt="alert-image"
								width={16}
								height={16}
							/>
							<p className={cx('ProductCard__alert-text')}>
								{alert.text}
							</p>
						</div>
					))}
				</div>
			)}

			<FavoriteAndComparisonButtons
				className={cx('ProductCard__actions')}
			/>

			<div className={cx('ProductCard__image-wrapper')}>
				<Image alt="Перфоратор" src={src} width={250} height={165} />
				<div className={cx('ProductCard__info')}>
					<div className={cx('ProductCard__rating-wrapper')}>
						<img
							alt="Рейтинг"
							src="/icons/common/rating-icon.svg"
						/>
						<div className={cx('ProductCard__rating')}>
							{rating}
						</div>
					</div>

					<div className={cx('ProductCard__article-wrapper')}>
						Артикул:{' '}
						<span className={cx('ProductCard__article')}>
							{article}
						</span>
					</div>
				</div>
			</div>

			<p className={cx('ProductCard__title')}>{title}</p>

			<div className={cx('ProductCard__divider-wrapper')}>
				<p className={cx('ProductCard__divider-title')}>
					Цена за штуку
				</p>
				<div className={cx('ProductCard__divider')} />
			</div>

			<div className={cx('ProductCard__bottom-block')}>
				{typeof price === 'string' ? (
					<>
						<p className={cx('ProductCard__price')}>
							{price} &#8381;/шт.
						</p>
						<p className={cx('ProductCard__packagingPrice')}>
							12 900 &#8381;/уп.
						</p>
					</>
				) : (
					<div className={cx('ProductCard__price-wrapper')}>
						<p className={cx('ProductCard__price-new')}>
							{price.newValue} &#8381;
						</p>
						<p className={cx('ProductCard__price-old')}>
							{price.oldValue} &#8381;
						</p>
					</div>
				)}
				<Button className={cx('ProductCard__button')}>В корзину</Button>
			</div>
		</div>
	</div>
);
