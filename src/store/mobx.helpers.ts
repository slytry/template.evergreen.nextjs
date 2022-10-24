import { spy } from 'mobx';
import { onSnapshot } from 'mobx-state-tree';

export const logAllActions = () => {
	spy((ev) => {
		if (ev.type.includes('action')) {
			console.log(ev);
		}
	});
};

export const logStore = (storeInstance) => {
	onSnapshot(storeInstance, (newSnapshot) => {
		console.info('Got new snapshot:', newSnapshot);
	});
};

export function createTypes<T>(arr: string[], type: T): Record<string, T> {
	return arr.reduce((a, v) => ({ ...a, [v]: type }), {});
}

export const envLogger = {
	log(msg) {
		console.log(msg);
	},
};
