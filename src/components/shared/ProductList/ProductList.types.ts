import { FilterType } from 'components/shared/Filters/Filters.types';

import { ProductCardType } from '../../../lib/models/productCard/ProductCard.types';

export interface ProductListProps {
	className?: string;
	products: ProductCardType[];
	filters: FilterType[];
}
