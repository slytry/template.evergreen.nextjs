import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { BreadcrumbItem, Breadcrumbs } from '@/base/Breadсrumbs';
import { ActionButton } from '@/base/Buttons';
import { Avatar } from '@/pages/Profile/partials/Avatar';
import { Menu } from '@/pages/Profile/partials/Menu';
import { IBreadcrumbs } from 'types/share.types';

import ExitSVG from 'public/icons/logout.svg';

import styles from './LkLayout.module.scss';

const cx = cn.bind(styles);

interface LkLayoutProps {
	breadcrumbs: IBreadcrumbs[];
	headTitle: string;
	contentDesc: string;
}

export const LkLayout = ({
	breadcrumbs,
	children,
	headTitle,
	contentDesc,
}: PropsWithChildren<LkLayoutProps>) => {
	const { t } = useTranslation(['common']);

	return (
		<>
			<Head>
				<title>{headTitle}</title>
				<meta name="description" content={contentDesc} />
			</Head>
			<div className={cx('LkLayout')}>
				<Breadcrumbs className={cx('LkLayout__breadcrumbs')}>
					{breadcrumbs.map(({ href, title }) => (
						<BreadcrumbItem key={href} href={href}>
							{title}
						</BreadcrumbItem>
					))}
				</Breadcrumbs>
				<div className={cx('LkLayout__grid')}>
					<aside className={cx('LkLayout__left-bar')}>
						<Avatar />
						<Menu />
						<ActionButton className={cx('LkLayout__exit-button')}>
							<ExitSVG />
							{t('common:exit-btn')}
						</ActionButton>
					</aside>
					<main className={cx('LkLayout__main')}>{children}</main>
				</div>
			</div>
		</>
	);
};
