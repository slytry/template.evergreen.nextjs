import {
	AriaLabelingProps,
	DOMProps,
	ItemElement,
	ItemRenderer,
	MultipleSelection,
} from '@react-types/shared';
import { Key } from 'react';

// Not extending CollectionBase to avoid async loading props
export interface ActionGroupInnerProps<T> extends MultipleSelection {
	/** An list of `Item` elements or a function. If the latter, a list of items must be provided using the `items` prop. */
	children: ItemElement<T> | ItemElement<T>[] | ItemRenderer<T>;
	/** A list of items to display as children. Must be used with a function as the sole child. */
	items?: Iterable<T>;
	/** A list of keys to disable. */
	disabledKeys?: Iterable<Key>;
	/**
	 * Whether the ActionGroup is disabled.
	 * Shows that a selection exists, but is not available in that circumstance.
	 */
	isDisabled?: boolean;
	/**
	 * Invoked when an action is taken on a child. Especially useful when `selectionMode` is none.
	 * The sole argument `key` is the key for the item.
	 */
	onAction?: (key: Key) => void;
}

export interface ActionGroupProps<T> extends ActionGroupInnerProps<T>, DOMProps, AriaLabelingProps {
	variant: 'default' | 'color';
}
