import { AriaLabelingProps, DOMProps, ItemProps } from '@react-types/shared';
import { ReactElement, Key } from 'react';

export interface BreadcrumbsProps<T> extends DOMProps, AriaLabelingProps {
	/** The breadcrumb items. */
	children: ReactElement<ItemProps<T>> | ReactElement<ItemProps<T>>[];
	/** Whether the Breadcrumbs are disabled. */
	isDisabled?: boolean;
	/** Called when an item is acted upon (usually selection via press). */
	onAction?: (key: Key) => void;
	/**
	 * Whether to place the last Breadcrumb item onto a new line.
	 */
	isMultiline?: boolean;
	/**
	 * Whether to autoFocus the last Breadcrumb item when the Breadcrumbs render.
	 */
	autoFocusCurrent?: boolean;
	className?: string;
}
