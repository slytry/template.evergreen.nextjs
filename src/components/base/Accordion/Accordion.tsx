import cn from 'classnames/bind';
import React, { ReactElement, useRef, useState, useEffect } from 'react';
import { useId } from 'react-aria';

import { Heading } from '@/base/Heading';

import Chevron from 'public/icons/common/arrow-left.svg';

import styles from './Accordion.module.scss';

const cx = cn.bind(styles);

interface AccordionProps {
	title: string;
	children: ReactElement | ReactElement[];
	isExpanded?: boolean;
	className?: string;
}

const Accordion = ({ title, children, isExpanded, className }: AccordionProps): ReactElement => {
	const [isActive, setIsActive] = useState(isExpanded || false);
	const accordionRef = useRef<HTMLDivElement>(null);
	const [contentHeight, setContentHeight] = useState(0);

	const id = useId();

	useEffect(() => {
		if (isActive) {
			setContentHeight(accordionRef.current.scrollHeight || 0);
		} else {
			setContentHeight(0);
		}
	}, [isActive]);

	return (
		<div className={cx('Accordion', className)}>
			<button
				type="button"
				className={cx('Accordion__button')}
				onClick={() => setIsActive(!isActive)}
				aria-expanded={isActive}
				aria-controls={`content-${id}`}
			>
				<Heading level="3" className={cx('Accordion__title')}>
					{title}
				</Heading>
				<Chevron
					aria-hidden="true"
					className={cx('Accordion__chevron', {
						'Accordion__chevron--open': isActive,
					})}
				/>
			</button>
			<div
				id={`content-${id}`}
				className={cx('Accordion__content', {
					'Accordion__content--open': isActive,
				})}
				ref={accordionRef}
				style={{ height: `${contentHeight}px` }}
			>
				{children}
			</div>
		</div>
	);
};

export { Accordion };
