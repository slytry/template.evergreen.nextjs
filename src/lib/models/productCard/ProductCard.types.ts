export interface ProductCardProps extends ProductCardType {
	className?: string;
}

export interface ProductCardType {
	title: string;
	src: string;
	price: PriceType;
	type: ProductType;
	alerts?: AlertType[];
	info: InfoType;
}

export type ProductType = string;

export interface InfoType {
	rating: string;
	article: string;
}
export interface AlertType {
	text: string;
	type: 'green' | 'orange';
}

export type PriceType =
	| string
	| {
			oldValue: string;
			newValue: string;
	  };
