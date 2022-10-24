import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { useNotificationsQuery } from 'lib/services/common.service';

import DinDon from 'public/icons/management/din-don.svg';

import styles from './ActivityBar.module.scss';

const cx = cn.bind(styles);

interface ActivityBarProps {
	className?: string;
}

export const ActivityBar = ({ className }: ActivityBarProps) => {
	const { t } = useTranslation(['management']);

	const { isLoading, isError, isSuccess, data } = useNotificationsQuery();

	const renderResult = () => {
		if (isLoading) {
			return <p className={cx('ActivityBar__text')}>Loading...</p>;
		}
		if (isError) {
			return <p className={cx('ActivityBar__text')}>Something went wrong</p>;
		}
		if (isSuccess) {
			return data.total;
		}
		return null;
	};

	return (
		<div>
			<div className={cx('ActivityBar__notifications', className)}>
				<DinDon className={cx('ActivityBar__icon')} />
				<div className={cx('ActivityBar__contentBox')}>
					<p className={cx('ActivityBar__heading')}>{t('notifications')}</p>
					{renderResult()}
				</div>
			</div>
		</div>
	);
};
