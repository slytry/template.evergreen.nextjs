import { types as t, Instance } from 'mobx-state-tree';

export const LayoutStoreModel = t
	.model('LayoutStore', {
		isFiltersOpen: true,
		layoutMode: t.optional(t.enumeration('Cards layout', ['row', 'grid']), 'row'),
	})
	.actions((self) => {
		const toggleFilters = () => {
			self.isFiltersOpen = !self.isFiltersOpen;
		};
		const changeCardsLayoutMode = (mode) => {
			self.layoutMode = mode;
		};
		return { toggleFilters, changeCardsLayoutMode };
	});

export interface LayoutStore extends Instance<typeof LayoutStoreModel> {}
