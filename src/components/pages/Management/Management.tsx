import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { Heading } from '@/base/Heading';
import { LkLayout } from '@/layout/LkLayout';
import { useManagementQuery } from 'lib/services/lk.service';

import { ActivityBar } from './partials/ActivityBar';
import { MyFinances } from './partials/MyFinances';

import styles from './Management.module.scss';

const cx = cn.bind(styles);

export const Management = () => {
	const { t } = useTranslation(['management', 'common']);

	const { data } = useManagementQuery();

	return (
		<LkLayout
			headTitle={t('management:page-title')}
			breadcrumbs={data.breadcrumbs}
			contentDesc={t('management:contentDesc')}
		>
			<Heading level="2" className={cx('Management__heading1')}>
				{t('management:pageTitle')}
			</Heading>

			<Heading level="3" className={cx('Management__heading')}>
				{t('management:activeOrder')}
			</Heading>
			<ActivityBar />

			<Heading level="3" className={cx('Management__heading')}>
				{t('management:finance')}
			</Heading>
			<div className={cx('Management__finaceContainer')}>
				<MyFinances settlements={data.mutualSettlements} />
			</div>
		</LkLayout>
	);
};
