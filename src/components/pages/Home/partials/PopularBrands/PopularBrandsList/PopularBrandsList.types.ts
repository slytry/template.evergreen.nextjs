export interface PopularBrandsListProps {
	className?: string;
	brands: PopularBrandsDataType[];
}

export interface PopularBrandsDataType {
	src: string;
	id: string;
	alt: string;
}
