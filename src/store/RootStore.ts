/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import {
	applySnapshot,
	Instance,
	SnapshotIn,
	SnapshotOut,
	types as t,
} from 'mobx-state-tree';
import { connectReduxDevtools } from 'mst-middlewares';
import { useMemo } from 'react';

import { LayoutStoreModel } from './LayoutStore';
import { UserStoreModel } from './UserStore';

let store: StoreType | undefined;

const Store = t.model('Store', {
	layoutStore: t.optional(LayoutStoreModel, {}),
	userStore: t.optional(UserStoreModel, {}),
});

export type StoreType = Instance<typeof Store>;
export type StoreSnapshotInType = SnapshotIn<typeof Store>;
export type IStoreSnapshotOutType = SnapshotOut<typeof Store>;

export const initializeStore = (snapshot = null) => {
	const _store = store ?? Store.create();

	if (snapshot) {
		applySnapshot(_store, snapshot);
	}
	if (typeof window === 'undefined') return _store;
	if (!store) store = _store;

	connectReduxDevtools(require('remotedev'), store);
	return store;
};

export const useStore = (initialState?: any): StoreType => {
	const store = useMemo(() => initializeStore(initialState), [initialState]);
	return store;
};
