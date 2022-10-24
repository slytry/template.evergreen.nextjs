import cn from 'classnames/bind';
import React, { FC, useState } from 'react';

import { ControlArrowButtons } from 'components/shared/ControlArrowButtons';
import { Slide } from 'components/shared/Slider/Slide';
import { useTimeout } from 'utils/useTimout';

import { SliderProps } from './Slider.types';

import styles from './Slider.module.scss';

const cx = cn.bind(styles);

export const Slider: FC<SliderProps> = ({
	animationDuration,
	slides,
	className,
	showControls = true,
	showProgress = true,
	type = 'large',
	mode,
}) => {
	const [currElem, setCurrElem] = useState(0);

	useTimeout(() => {
		setCurrElem((state) => (state === slides.length - 1 ? 0 : state + 1));
	}, animationDuration);

	const onNext = (): void => {
		if (currElem !== slides.length - 1) setCurrElem((item) => item + 1);
	};

	const onPrev = (): void => {
		if (currElem !== 0) setCurrElem((item) => item - 1);
	};

	return (
		<div className={cx('Slider', `Slider--${type}`, className)}>
			<div className={cx('Slider__wrapper')}>
				{slides.map((item, index) => (
					<Slide
						key={index}
						className={cx('Slider__item', {
							Slider__item_current: currElem === index,
						})}
						mode={mode}
						{...item}
					/>
				))}
			</div>
			{showControls && (
				<div className={cx('Slider__buttons')}>
					<ControlArrowButtons onPrevClick={onPrev} onNextClick={onNext} />
				</div>
			)}

			{showProgress && (
				<div className={cx('Slider__progress-bar')}>
					{slides.map((slide, index) => (
						<div
							key={index}
							className={cx(
								'Slider__progress-item',
								`Slider__progress-item--${mode}`
							)}
						>
							{currElem === index && (
								<div
									className={cx(
										'Slider__progress-active',
										`Slider__progress-active--${mode}`
									)}
									style={{
										animationDuration: `${animationDuration / 1000}s`,
									}}
								/>
							)}
						</div>
					))}
				</div>
			)}
		</div>
	);
};
