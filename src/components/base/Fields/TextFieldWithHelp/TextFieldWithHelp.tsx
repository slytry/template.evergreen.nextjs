import cn from 'classnames/bind';
import { forwardRef } from 'react';

import { ActionButton } from '@/base/Buttons';
import { Tooltip, TooltipTrigger } from '@/base/TooltipTrigger';

import { TextFieldWithHelpProps } from '..';
import { TextFieldBase } from '../TextFieldBase';

import HelpSVG from 'public/icons/registration/contextual-help.svg';

import styles from './TextFieldWithHelp.module.scss';

const cx = cn.bind(styles);

export const TextFieldWithHelp = forwardRef<HTMLInputElement, TextFieldWithHelpProps>(
	({ helpText, className, ...props }, forwardedRef) => (
		<TextFieldBase
			className={cx(className)}
			ref={forwardedRef}
			renderComponent={() => (
				<TooltipTrigger placement="top end">
					<ActionButton className={cx('TextFieldWithHelp__help')}>
						<HelpSVG />
					</ActionButton>
					<Tooltip>{helpText}</Tooltip>
				</TooltipTrigger>
			)}
			{...props}
		/>
	)
);
