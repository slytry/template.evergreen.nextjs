import type { SpectrumDialogTriggerProps } from '@react-types/dialog';

export { DialogTrigger } from './DialogTrigger';
export { Dialog } from './Dialog';
export { DialogContext } from './DialogContext';

export interface DialogTriggerProps extends SpectrumDialogTriggerProps {
	type?: 'modal' | 'popover' | 'tray';
	mobileType?: 'modal' | 'tray';
}
