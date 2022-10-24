import cnBind from 'classnames/bind';
import React, { ReactElement } from 'react';

import { Slider } from 'components/shared/Slider';
import { FIRST_SLIDES, SECOND_SLIDES } from 'lib/models';

import styles from './TopSliders.module.scss';

const cx = cnBind.bind(styles);

const TopSliders = (): ReactElement => (
	<section className={cx('TopSliders')}>
		<Slider slides={FIRST_SLIDES} animationDuration={4000} mode="dark" />
		<Slider
			slides={SECOND_SLIDES}
			type="small"
			showProgress={false}
			animationDuration={5000}
			mode="dark"
		/>
	</section>
);

export { TopSliders };
