import cn from 'classnames/bind';
import { ReactNode } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

import styles from './FadeSwitchTransition.module.scss';

const cx = cn.bind(styles);

interface FadeSwitchTransitionrProps {
	formState?: string;
	children: ReactNode;
}

export const FadeSwitchTransition = ({ formState, children }: FadeSwitchTransitionrProps) => (
	<SwitchTransition>
		<CSSTransition
			key={formState}
			addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
			appear
			timeout={200}
			classNames={{
				enter: cx('fade-enter'),
				enterActive: cx('fade-enter-active'),
				exit: cx('fade-exit'),
				exitActive: cx('fade-exit-active'),
			}}
		>
			{children}
		</CSSTransition>
	</SwitchTransition>
);
