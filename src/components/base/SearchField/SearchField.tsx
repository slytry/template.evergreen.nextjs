import cn from 'classnames/bind';
import React, { useRef, ReactElement } from 'react';
import { useSearchField, useButton, AriaSearchFieldProps } from 'react-aria';
import { useSearchFieldState } from 'react-stately';

import CloseSvg from 'public/icons/common/close.svg';
import SearchSvg from 'public/icons/common/search.svg';

import styles from './SearchField.module.scss';

const cx = cn.bind(styles);

interface SearchFieldProps extends AriaSearchFieldProps {
	label: string;
	placeholder: string;
	className?: string;
}

const SearchField = (props: SearchFieldProps): ReactElement => {
	const { label, placeholder, onSubmit, className } = props;
	const state = useSearchFieldState(props);
	const refInput = useRef();
	const refButton = useRef();

	const { labelProps, inputProps, clearButtonProps } = useSearchField(
		props,
		state,
		refInput
	);
	const { buttonProps } = useButton(clearButtonProps, refButton);

	return (
		<div className={cx('SearchField', className)}>
			<label className={cx('SearchField__label')} {...labelProps}>
				{label}
			</label>

			<input
				className={cx('SearchField__input')}
				{...inputProps}
				ref={refInput}
				placeholder={placeholder}
			/>

			{state.value !== '' ? (
				<button
					ref={refButton}
					className={cx('SearchField__button')}
					{...buttonProps}
					onClick={() => {
						onSubmit(state.value);
					}}
				>
					<CloseSvg />
				</button>
			) : (
				<SearchSvg className={cx('SearchField__searchSvg')} />
			)}
		</div>
	);
};

export { SearchField };
