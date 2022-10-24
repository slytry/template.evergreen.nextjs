export type menuItem = {
	slug: string;
	content: string;
};
export type productSectionItem = {
	slug: string;
	content: string;
	icon: string;
};

export interface IHeader {
	menu: menuItem[];
	productSections: productSectionItem[];
	location: string;
}
