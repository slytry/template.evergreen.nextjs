import { LinkProps } from 'next/link';
import { HTMLAttributeAnchorTarget, ReactElement } from 'react';
import { AriaLinkOptions } from 'react-aria';

export * from './Link';

export interface ILink extends AriaLinkOptions, LinkProps {
	className?: string;
	href: string;
	target?: HTMLAttributeAnchorTarget;
	variant?: 'blue' | 'dark' | 'chevron';
	children: ReactElement;
}
