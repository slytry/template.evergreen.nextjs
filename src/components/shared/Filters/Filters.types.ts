import { ProductType } from '../../../lib/models/productCard/ProductCard.types';

export interface FiltersProps {
	className?: string;
	filters: FilterType[];
	onClick: (value: ProductType) => void;
	activeFilter: ProductType;
}

export interface FilterType {
	value: ProductType;
	text: string;
}
