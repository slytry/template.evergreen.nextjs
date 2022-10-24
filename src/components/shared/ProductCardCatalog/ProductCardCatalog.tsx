import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import Image from 'next/image';

import { Button } from '@/base/Buttons';
import {
	CardType,
	ProductCardCatalogMock,
} from 'lib/models/productCardCatalog/ProductCardCatalog.data';

import { FavoriteAndComparisonButtons } from '../FavoriteAndComparisonButtons';

import { Attributes } from './partials/Attributes';
import { Price } from './partials/Price';
import { Rating } from './partials/Rating';

import styles from './ProductCardCatalog.module.scss';

const cx = cn.bind(styles);
const { quantityInPackage, minimumPurchase } = ProductCardCatalogMock.data.purchase;

interface ProductCardCatalogProps extends CardType {
	view?: string;
}
const ProductCardCatalog = ({
	title,
	rating,
	inFavorite,
	inСomparison,
	productCode,
	images,
	purchase,
	attributes,
	view,
	comments,
}: ProductCardCatalogProps) => (
	<div
		className={cx('ProductCardCatalog', {
			'ProductCardCatalog--row': view === 'row',
		})}
	>
		<div
			className={cx('ProductCardCatalog__top', {
				'ProductCardCatalog__top--row': view === 'row',
			})}
		>
			<FavoriteAndComparisonButtons
				className={cx('ProductCardCatalog__interactiveButtons', {
					'ProductCardCatalog__interactiveButtons--row': view === 'row',
				})}
				inFavorite={inFavorite}
				inСomparison={inСomparison}
			/>
			<Image
				className={cx('ProductCardCatalog__image')}
				src={images}
				alt="Банка краски"
				objectFit="cover"
				width={249}
				height={164}
				priority
			/>
		</div>
		<div
			className={cx('ProductCardCatalog__middle', {
				'ProductCardCatalog__middle--row': view === 'row',
			})}
		>
			<div
				className={cx('ProductCardCatalog__info', {
					'ProductCardCatalog__info--row': view === 'row',
				})}
			>
				<Rating rating={rating} />
				{view === 'row' && (
					<div className={cx('ProductCardCatalog__commentQuantity')}>
						<img
							alt="Серый прямоугольник"
							src="/icons/cloud-chat.svg"
							width={12}
							height={12}
						/>
						<p>{comments.total} отзывов</p>
					</div>
				)}
				<span className={cx('ProductCardCatalog__productCode')}>
					Код: {productCode}
				</span>
			</div>
			{view === 'row' && (
				<>
					<p className={cx('ProductCardCatalog__purchase--row')}>
						Минимальная партия:{' '}
						<span className={cx('ProductCardCatalog__purchaseNumber--row')}>
							{minimumPurchase} шт.
						</span>
					</p>
					<p className={cx('ProductCardCatalog__purchase--row')}>
						Количество в упаковке:{' '}
						<span className={cx('ProductCardCatalog__purchaseNumber--row')}>
							{quantityInPackage} шт.
						</span>
					</p>
				</>
			)}
			<p
				className={cx('ProductCardCatalog__title', {
					'ProductCardCatalog__title--row': view === 'row',
				})}
			>
				{title}
			</p>

			{view === 'grid' && (
				<Attributes
					className={cx('ProductCardCatalog__attributes')}
					attributes={attributes}
				/>
			)}
			{view === 'grid' && (
				<p className={cx('ProductCardCatalog__stock')}>
					{quantityInPackage} шт. в упаковке{' '}
				</p>
			)}
		</div>
		<div className={cx('ProductCardCatalog__bottom')}>
			<Price view={view} purchase={purchase} />
			<Button
				className={cx('ProductCardCatalog__button', {
					'ProductCardCatalog__button--row': view === 'row',
				})}
			>
				В корзину
			</Button>
			<p
				className={cx('ProductCardCatalog__minimumPurchase', {
					'ProductCardCatalog__minimumPurchase--row': view === 'row',
				})}
			>
				от {minimumPurchase} шт.
			</p>
		</div>
	</div>
);

const _ProductCardCatalog = observer(ProductCardCatalog);

export { _ProductCardCatalog as ProductCardCatalog };
