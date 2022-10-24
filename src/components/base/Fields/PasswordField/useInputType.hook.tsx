import { HTMLInputTypeAttribute } from 'react';

import { useToggle } from 'utils/useToogle';

import HideSVG from 'public/icons/registration/hide-password.svg';
import ShowSVG from 'public/icons/registration/show-password.svg';

interface useInputTypeProps {
	type: HTMLInputTypeAttribute;
}

export function useInputType({ type }: useInputTypeProps) {
	let [passwordShown, togglePasswordVisiblity] = useToggle();

	const passwordType = passwordShown ? 'text' : 'password';

	const currentType = type === 'password' ? passwordType : type;

	const currentSvg = passwordShown ? <HideSVG /> : <ShowSVG />;

	return {
		currentType,
		currentSvg,
		togglePasswordVisiblity,
	};
}
