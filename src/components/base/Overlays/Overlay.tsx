import { OverlayProps } from '@react-types/overlays';
import { useCallback, useState } from 'react';
import { createPortal } from 'react-dom';

import { ProviderModal } from '@/context/ProviderModal';

import { OpenTransition } from './OpenTransition';

export function Overlay(props: OverlayProps) {
	const {
		children,
		isOpen,
		container,
		onEnter,
		onEntering,
		onEntered,
		onExit,
		onExiting,
		onExited,
	} = props;
	const [exited, setExited] = useState(!isOpen);

	const handleEntered = useCallback(() => {
		setExited(false);
		onEntered?.();
	}, [onEntered]);

	const handleExited = useCallback(() => {
		setExited(true);
		onExited?.();
	}, [onExited]);

	// // Don't un-render the overlay while it's transitioning out.
	const mountOverlay = isOpen || !exited;
	if (!mountOverlay) {
		// Don't bother showing anything if we don't have to.
		return null;
	}

	const contents = (
		<ProviderModal>
			<OpenTransition
				in={isOpen}
				appear
				onExit={onExit}
				onExiting={onExiting}
				onExited={handleExited}
				onEnter={onEnter}
				onEntering={onEntering}
				onEntered={handleEntered}
			>
				{children}
			</OpenTransition>
		</ProviderModal>
	);

	return createPortal(contents, container || document.body);
}
