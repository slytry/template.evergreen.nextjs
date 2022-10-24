import { ModalProvider, useModalProvider } from 'react-aria';

export function ProviderModal({ children }) {
	const { modalProviderProps } = useModalProvider();

	return (
		<ModalProvider>
			<div
				style={{ background: 'transparent', isolation: 'isolate' }}
				{...modalProviderProps}
			>
				{children}
			</div>
		</ModalProvider>
	);
}
