import cn from 'classnames/bind';
import { ReactFragment, ReactNode } from 'react';
import { Item } from 'react-stately';

import { Dialog } from '@/base/Dialog';
import { DialogProps } from '@/base/Dialog/Dialog';
import { Tabs } from '@/base/Tabs';

import LogoSvg from 'public/icons/registration/logo-registration.svg';

import styles from './ModalWithTabs.module.scss';

const cx = cn.bind(styles);

interface ModalWithTabsProps extends DialogProps {
	defaultSelectedTab?: string;
	children: ReactNode;
}

export const ModalWithTabs = ({
	defaultSelectedTab = '1',
	children,
	...otherProps
}: ModalWithTabsProps) => {
	if (!Array.isArray(children) || children.length > 2) {
		throw new Error('ModalTabs must has exactly 2 children');
	}

	// if a function is passed as the second child, it won't appear in toArray
	const [retailTab, wholeSaleTab] = children as [ReactFragment, ReactFragment];

	const logo = (
		<div className={cx('ModalWithTabs__logo-container')}>
			<LogoSvg className={cx('ModalWithTabs__logo')} />
		</div>
	);

	return (
		<Dialog {...otherProps}>
			{logo}

			<Tabs variant="registration" defaultSelectedKey={defaultSelectedTab}>
				<Item key={0} title="Розничный клиент">
					{retailTab}
				</Item>
				<Item key={1} title="Оптовый клиент">
					{wholeSaleTab}
				</Item>
			</Tabs>
		</Dialog>
	);
};
