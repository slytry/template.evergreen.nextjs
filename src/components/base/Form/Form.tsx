import cn from 'classnames/bind';

import { filterDOMProps } from 'utils/filterDOMProps';

import { FormProps } from './Form.types';

import styles from './Form.module.scss';

const cx = cn.bind(styles);

const formPropNames = new Set([
	'action',
	'autoComplete',
	'encType',
	'method',
	'target',
	'onSubmit',
]);

export function Form(props: FormProps) {
	const { children, className, ...otherProps } = props;

	return (
		<form
			className={cx('Form', className)}
			{...filterDOMProps(otherProps, { labelable: true, propNames: formPropNames })}
			noValidate
		>
			{children}
		</form>
	);
}
