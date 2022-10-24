import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { Link } from '@/base/Link';
import { pathes } from 'lib/constants/pathes';

import styles from './Avatar.module.scss';

const cx = cn.bind(styles);

interface AvatarProps {
	className?: string;
}

export const Avatar = ({ className }: AvatarProps) => {
	const { t } = useTranslation(['common']);
	return (
		<div className={cx('Avatar', className)}>
			<Link href={pathes.profile} className={cx('Avatar__thaumb')} aria-hidden>
				<a>KK</a>
			</Link>
			<div className={cx('Avatar__label')}>
				<p className={cx('Avatar__name')}>Константин К.</p>
				<Link href="#" variant="dark" className={cx('Avatar__change-profile')}>
					<a>{t('common:change-data')}</a>
				</Link>
			</div>
		</div>
	);
};
