export type TCategoryItem = {
	id: string;
	value: string;
	link: string;
	subcategories: TCategoryItem[] | null;
};

export type Tbaner = {
	heading: string;
	text: string;
	image: string;
};

export interface ICatalogMenuData {
	categories: TCategoryItem[];
	baner: Tbaner;
}
