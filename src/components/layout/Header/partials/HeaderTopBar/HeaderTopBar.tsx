/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import cnBind from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactElement } from 'react';

import { HeaderTopBarProps } from './HeaderTopBar.types';

import ChatSvg from 'public/icons/common/chat-12.svg';
import LocateSvg from 'public/icons/header/location.svg';

import styles from './HeaderTopBar.module.scss';

const cx = cnBind.bind(styles);

const HeaderTopBar = ({
	className,
	menuItems,
	location,
	pageType,
	setPageType,
}: HeaderTopBarProps): ReactElement => {
	const setRetailType = (): void => {
		setPageType('retail');
	};
	const setWholesaleType = (): void => {
		setPageType('wholesale');
	};

	const { t } = useTranslation(['common', 'profile']);

	return (
		<div className={cx('HeaderTopBar', className)}>
			<div className={cx('HeaderTopBar__sales-mod')}>
				<Link href="/">
					<a
						onClick={setRetailType}
						role="button"
						className={cx('HeaderTopBar__retail', {
							HeaderTopBar__selected: pageType === 'retail',
						})}
					>
						{t('common:retail-clients')}
					</a>
				</Link>
				<Link href="/">
					<a
						onClick={setWholesaleType}
						role="button"
						className={cx('HeaderTopBar__wholesale', {
							HeaderTopBar__selected: pageType === 'wholesale',
						})}
					>
						{t('common:whole-clients')}
					</a>
				</Link>
			</div>

			<nav className={cx('.HeaderTopBar__nav')}>
				<ul className={cx('HeaderTopBar__nav-list')}>
					{menuItems.map((item) => (
						<li key={item.slug} className={cx('HeaderTopBar__nav-item')}>
							<Link href="/">
								<a>{item.content}</a>
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<div className={cx('HeaderTopBar__customers-bar')}>
				<div className={cx('HeaderTopBar__icon-wrapper')}>
					<LocateSvg className={cx('HeaderTopBar__icon-location')} />
					<Link href="/">
						<a className={cx('HeaderTopBar__location')}>{location}</a>
					</Link>
				</div>
				<div className={cx('HeaderTopBar__icon-wrapper')}>
					<ChatSvg className={cx('HeaderTopBar__icon-chat')} />
					<Link href="/">
						<a className={cx('HeaderTopBar__request')}>
							{t('common:send-request')}
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
};

export { HeaderTopBar };
