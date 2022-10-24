import cn from 'classnames/bind';
import { ForwardedRef, forwardRef, ReactElement, RefObject } from 'react';
import { useListBox } from 'react-aria';

import { ListBoxOption } from './ListBoxOption';

import { ListBoxBaseProps } from '.';

import styles from './ListBox.module.scss';

const cx = cn.bind(styles);

function ListBoxBase<T>(props: ListBoxBaseProps<T>, ref: ForwardedRef<HTMLUListElement>) {
	let { state, label } = props;

	const { listBoxProps, labelProps } = useListBox(
		props,
		state,
		ref as RefObject<HTMLUListElement>
	);

	return (
		<>
			<div {...labelProps}>{label}</div>
			<ul {...listBoxProps} ref={ref} className={cx('ListBoxBase')}>
				{Array.from(state.collection).map((item) => (
					<ListBoxOption key={item.key} item={item} state={state} />
				))}
			</ul>
		</>
	);
}

const _ListBoxBase = forwardRef(ListBoxBase) as <T>(
	props: ListBoxBaseProps<T> & { ref?: ForwardedRef<HTMLUListElement> }
) => ReactElement;
export { _ListBoxBase as ListBoxBase };
