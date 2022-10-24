/* eslint-disable @typescript-eslint/no-unused-vars */
import cnBind from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import { ReactElement, useMemo } from 'react';

import { FooterLinks } from './Partials/FooterLinks';

import ChatSvg from 'public/icons/common/chat-24.svg';
import LogoSvg from 'public/icons/logo/main-logo.svg';

import styles from './Footer.module.scss';

const cx = cnBind.bind(styles);

type TLinksList = {
	title: string;
	links: string[];
};

type keysTypes = ['for-clients', 'menu', 'catalog', 'more-catalog'];

const Footer = ({ className }: { className?: string }): ReactElement => {
	const { t } = useTranslation(['footer']);

	const keys: keysTypes = ['for-clients', 'menu', 'catalog', 'more-catalog'];

	const linksArr = useMemo<TLinksList[]>(
		() => keys.map((el) => t(`footer:${el}`, { returnObjects: true })),
		[keys]
	);

	return (
		<footer className={cx('Footer', className)}>
			<div className={cx('Footer__container')}>
				<div className={cx('Footer__content-wrapper')}>
					<div className={cx('Footer__aside-bar-wrapper')}>
						<LogoSvg className={cx('Footer__logo')} />
						<a href="tel:88007003110" className={cx('Footer__tel')}>
							8 800 700-31-10
						</a>
						<p className={cx('Footer__work-time')}>{t('footer:time')}</p>
						<div className={cx('Footer__icon-wrapper')}>
							<ChatSvg />
							<a href="#" className={cx('Footer__feedback')}>
								{t('footer:feedback')}
							</a>
						</div>
					</div>
					<div className={cx('Footer__lists-wrapper')}>
						{linksArr.map((el) => (
							<FooterLinks {...el} key={el.title} />
						))}
					</div>
				</div>
				<div className={cx('Footer__bottom-bar')}>
					<p className={cx('Footer__copy')}>© Вертикаль, 2022</p>

					<div className={cx('Footer__credits')}>
						<p className={cx('Footer__policy')}>
							{t('footer:privacy-policy')}
						</p>
						<p className={cx('Footer__made-in')}>{t('footer:made-by')}</p>
						<img
							className={cx('Footer__chulakov')}
							src="/icons/logo/chulakov-logo.svg"
							alt="CHULAKOV"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};

export { Footer };
