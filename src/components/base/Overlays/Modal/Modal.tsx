import cn from 'classnames/bind';
import { observer } from 'mobx-react-lite';
import {
	ForwardedRef,
	forwardRef,
	HTMLAttributes,
	ReactElement,
	ReactNode,
	useContext,
	useRef,
} from 'react';
import { mergeProps, useModal, useOverlay, usePreventScroll } from 'react-aria';

import { ActionButton } from '@/base/Buttons';
import { DialogContext } from '@/base/Dialog';
import { DialogContextValue } from '@/base/Dialog/DialogContext';

import { Overlay } from '../Overlay';
import { Underlay } from '../Underlay';

import Cross from 'public/icons/registration/cross.svg';

import styles from './Modal.module.scss';

const cx = cn.bind(styles);

export interface ModalProp {
	children: ReactElement;
	isOpen?: boolean;
	onClose?: () => void;
	type?: 'modal' | 'fullscreen' | 'fullscreenTakeover';
	isDismissable?: boolean;
}

export function Modal(props) {
	const { children, isOpen, onClose, isDismissable } = props;
	const ref = useRef<HTMLDivElement>();
	const { overlayProps, underlayProps } = useOverlay({ isOpen, isDismissable, onClose }, ref);
	return (
		<Overlay isOpen={isOpen}>
			<Underlay {...underlayProps}>
				<ModalWrapper ref={ref} overlayProps={overlayProps} isOpen={isOpen}>
					{children}
				</ModalWrapper>
			</Underlay>
		</Overlay>
	);
}

interface ModalWrapperProps extends HTMLAttributes<HTMLElement> {
	children: ReactNode;
	isOpen?: boolean;
	overlayProps: HTMLAttributes<HTMLElement>;
}

const ModalWrapper = observer(
	forwardRef((props: ModalWrapperProps, ref: ForwardedRef<HTMLDivElement>) => {
		let { children, overlayProps, isOpen } = props;
		const { isDismissable, onClose } = useContext(DialogContext) || ({} as DialogContextValue);
		let { modalProps } = useModal();
		usePreventScroll();

		return (
			<div className={cx('Modal-wrapper')}>
				<div
					ref={ref}
					className={cx('Modal', {
						'is-open': isOpen,
					})}
					{...mergeProps(overlayProps, modalProps)}
				>
					{isDismissable && (
						<ActionButton
							className={cx('Modal-closeButton')}
							aria-label="dismiss"
							onPress={onClose}
						>
							<Cross />
						</ActionButton>
					)}
					{children}
				</div>
			</div>
		);
	})
);
