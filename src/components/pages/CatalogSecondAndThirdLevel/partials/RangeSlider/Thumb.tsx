import { AriaSliderThumbProps } from '@react-types/slider';
import cn from 'classnames/bind';
import { ReactElement, RefObject, useRef } from 'react';
import { mergeProps, useFocusRing, useSliderThumb } from 'react-aria';
import { SliderState } from 'react-stately';

import styles from './Thumb.module.scss';

const cx = cn.bind(styles);

interface ThumbProp extends AriaSliderThumbProps {
	trackRef: RefObject<HTMLElement>;
	inputRef?: RefObject<HTMLInputElement>;
	state: SliderState;
}

const Thumb = (props: ThumbProp): ReactElement => {
	const { state, trackRef, index } = props;
	const inputRef = useRef(null);
	const { thumbProps, inputProps } = useSliderThumb(
		{
			index,
			trackRef,
			inputRef,
		},
		state
	);

	const { focusProps, isFocusVisible } = useFocusRing();

	return (
		<div
			className={cx('Thumb')}
			style={{
				left: `${state.getThumbPercent(index) * 100}%`,
			}}
		>
			<div
				className={cx(
					'Thumb__container',
					{ 'Thumb__container--focus': isFocusVisible },
					{ 'Thumb__container--dragging': state.isThumbDragging(index) }
				)}
				{...thumbProps}
			>
				<input
					className={cx('Thumb__input')}
					ref={inputRef}
					{...mergeProps(inputProps, focusProps)}
				/>
			</div>
		</div>
	);
};

export { Thumb };
