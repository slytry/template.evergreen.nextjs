import cnBind from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { Link } from '@/base/Link';
import { Auth } from '@/layout/Auth';

import { CatalogBtn } from '../CatalogBtn';

import { HeaderMiddleBarProps } from './HeaderMiddleBar.types';

import CardSvg from 'public/icons/header/card.svg';
import ChartSvg from 'public/icons/header/chart.svg';
import HeartSvg from 'public/icons/header/heart.svg';
import LogoSvg from 'public/icons/logo/main-logo.svg';

import styles from './HeaderMiddleBar.module.scss';

const cx = cnBind.bind(styles);

const HeaderMiddleBar = ({
	className,
	isCatalogOpen,
	toggleCatalogPortal,
}: HeaderMiddleBarProps) => {
	const { t } = useTranslation(['common']);

	return (
		<div className={cx('HeaderMiddleBar', className)}>
			<Link href="/">
				<a>
					<LogoSvg className={cx('HeaderMiddleBar__logo')} />
				</a>
			</Link>
			<CatalogBtn onClick={toggleCatalogPortal} isCatalogOpen={isCatalogOpen} />
			<input
				className={cx('HeaderMiddleBar__search')}
				type="text"
				placeholder={t('common:search-goods')}
			/>
			<div className={cx('HeaderMiddleBar__icon-group')}>
				<Link href="/">
					<a>
						<ChartSvg />
					</a>
				</Link>

				<Link href="/">
					<a>
						<HeartSvg />
					</a>
				</Link>

				<Link href="/">
					<a>
						<CardSvg />
					</a>
				</Link>
			</div>

			<Auth />
		</div>
	);
};
export { HeaderMiddleBar };
