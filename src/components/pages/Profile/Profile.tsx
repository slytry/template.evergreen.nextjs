import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';

import { Heading } from '@/base/Heading';
import { LkLayout } from '@/layout/LkLayout';
import { useProfileQuery } from 'lib/services/lk.service';

import { PersonalData } from './partials/PersonalData';
import { Subscriptions } from './partials/Subscriptions';

import styles from './Profile.module.scss';

const cx = cn.bind(styles);

export const Profile = (): ReactElement => {
	const { t } = useTranslation(['profile', 'common']);

	const { data } = useProfileQuery();

	return (
		<LkLayout
			headTitle={t('profile:page-title')}
			breadcrumbs={data.breadcrumbs}
			contentDesc={t('profile:contentDesc')}
		>
			<Heading level="1" className={cx('Profile__heading')}>
				{t('profile:page-title')}
			</Heading>
			<div className={cx('Profile__content')}>
				<PersonalData className={cx('Profile__data')} />
				<Subscriptions className={cx('Profile__subscriptions')} />
			</div>
		</LkLayout>
	);
};
