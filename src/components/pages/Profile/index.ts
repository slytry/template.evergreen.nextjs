import { Dispatch, SetStateAction } from 'react';

export { Profile } from './Profile';

export type TSetModal = Dispatch<SetStateAction<string>>;
export interface ISetModal {
	setModal: TSetModal;
}
