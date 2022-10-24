import cnBind from 'classnames/bind';
import { FC } from 'react';

import { Button } from '@/base/Buttons';

import { SlideProps } from './Slide.types';

import styles from './Slide.module.scss';

const cx = cnBind.bind(styles);

const Slide: FC<SlideProps> = ({
	className,
	title,
	mode = 'dark',
	subtitle,
	mainButton,
	secondaryButton,
	background,
}) => (
	<div
		className={cx('Slide', `Slide--${mode}`, className)}
		style={{
			backgroundImage: `url(${background})`,
		}}
	>
		<div className={cx('Slide__wrapper')}>
			{secondaryButton && (
				<Button
					className={cx('Slide__secondary-button')}
					onPress={secondaryButton.onClick}
					variant="outline"
				>
					{secondaryButton.text}
				</Button>
			)}

			{title && <p className={cx('Slide__title')}>{title}</p>}
			{subtitle && <p className={cx('Slide__subtitle')}>{subtitle}</p>}

			{mainButton && (
				<Button
					className={cx('Slide__main-button')}
					variant={mainButton.variant}
					onPress={mainButton.onClick}
				>
					{mainButton.text}
				</Button>
			)}
		</div>
	</div>
);

export { Slide };
