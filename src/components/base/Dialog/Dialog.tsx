import { DOMRef } from '@react-types/shared';
import cn from 'classnames/bind';
import { forwardRef, ReactElement, ReactNode, useContext } from 'react';
import { AriaDialogProps, DismissButton, FocusScope, mergeProps, useDialog } from 'react-aria';

import { useDOMRef } from 'utils/useDOMRef';

import { DialogContext, DialogContextValue } from './DialogContext';

import styles from './Dialog.module.scss';

const cx = cn.bind(styles);

export interface DialogProps extends AriaDialogProps {
	children: ReactNode;
	size?: 'S' | 'fullscreenTakeover';

	isDismissable?: boolean;
	/** Handler that is called when the 'x' button of a dismissable Dialog is clicked. */
	onDismiss?: () => void;
	'aria-label': string;
	className?: string;
	withSmallPadding?: boolean;
	withScroll?: boolean;
	center?: boolean;
}

function Dialog(props: DialogProps, ref: DOMRef) {
	const { type = 'modal', ...contextProps } =
		useContext(DialogContext) || ({} as DialogContextValue);

	const {
		children,
		onDismiss = contextProps.onClose,
		size = 'small',
		withSmallPadding,
		className,
		center,
	} = props;

	const domRef = useDOMRef(ref);

	const { dialogProps } = useDialog(mergeProps(contextProps, props), domRef);

	// If rendered in a popover or tray there won't be a visible dismiss button,
	// so we render a hidden one for screen readers.
	let dismissButton: ReactElement;
	if (type === 'popover' || type === 'tray') {
		dismissButton = <DismissButton onDismiss={onDismiss} />;
	}

	return (
		<section
			{...dialogProps}
			className={cx('Dialog', {
				'Dialog--withSmallPadding': withSmallPadding,
				'Dialog--center': center,
				[`Dialog--${size}`]: size,
				className,
			})}
			ref={domRef}
		>
			<FocusScope contain restoreFocus>
				{children}
				{dismissButton}
			</FocusScope>
		</section>
	);
}

/**
 * Dialogs are windows containing contextual information, tasks, or workflows that appear over the user interface.
 * Depending on the kind of Dialog, further interactions may be blocked until the Dialog is acknowledged.
 */
const _Dialog = forwardRef(Dialog);
export { _Dialog as Dialog };
