import { NumberFormatOptions } from '@internationalized/number';
import { SliderProps } from '@react-types/slider';
import cn from 'classnames/bind';
import { useRef } from 'react';
import { useSlider, useNumberFormatter } from 'react-aria';
import { useSliderState } from 'react-stately';

import { useOutputInput } from './RangeSlider.hooks';
import { Thumb } from './Thumb';

import styles from './RangeSlider.module.scss';

const cx = cn.bind(styles);

interface RangeSliderProps extends SliderProps {
	formatOptions: NumberFormatOptions;
	className?: string;
}

const RangeSlider = (props: RangeSliderProps) => {
	const trackRef = useRef(null);
	const numberFormatter = useNumberFormatter(props.formatOptions);

	const state = useSliderState({ ...props, numberFormatter });
	const { groupProps, trackProps, labelProps, outputProps } = useSlider(
		props,
		state,
		trackRef
	);
	const { firstInputProps, secondInputProps } = useOutputInput(state);

	return (
		<fieldset {...groupProps} className={cx('RangeSlider', props.className)}>
			<div className={cx('RangeSlider__outputGroup')}>
				{props.label && (
					<label {...labelProps} className={cx('RangeSlider__label')}>
						{props.label}
					</label>
				)}
				<output {...outputProps} className={cx('RangeSlider__output')}>
					<p className={cx('RangeSlider__outputItem')}>
						<span className={cx('RangeSlider__prefix')}>от</span>
						<input
							className={cx('RangeSlider__outputInput')}
							type="text"
							{...firstInputProps}
						/>
					</p>
					<p className={cx('RangeSlider__outputItem')}>
						<span className={cx('RangeSlider__prefix')}>до</span>
						<input
							className={cx('RangeSlider__outputInput')}
							type="text"
							{...secondInputProps}
						/>
					</p>
				</output>
			</div>
			<div {...trackProps} ref={trackRef} className={cx('RangeSlider__controls')}>
				<div className={cx('RangeSlider__track')} />
				<div
					style={{
						left: `${state.getThumbPercent(0) * 100}%`,
						width: `${
							(state.getThumbPercent(1) - state.getThumbPercent(0)) * 100
						}%`,
					}}
					className={cx('RangeSlider__betweenTrack')}
				/>
				<Thumb index={0} state={state} trackRef={trackRef} />
				<Thumb index={1} state={state} trackRef={trackRef} />
			</div>
		</fieldset>
	);
};

export { RangeSlider };
