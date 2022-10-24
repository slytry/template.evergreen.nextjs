import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { ToggleSwitch } from '@/base/Buttons';
import { Heading } from '@/base/Heading';
import { useProfileQuery } from 'lib/services/lk.service';

import styles from './Subscriptions.module.scss';

const cx = cn.bind(styles);

interface SubscriptionsProps {
	className?: string;
}

export const Subscriptions = ({ className }: SubscriptionsProps) => {
	const { t } = useTranslation('profile');

	const { data } = useProfileQuery();

	return (
		<article className={cx('Subscriptions', className)}>
			<Heading level="2" className={cx('Subscriptions__heading')}>
				{t('my-subs')}
			</Heading>
			<ul className={cx('Subscriptions__list')}>
				{data.subscription.map((el) => (
					<li key={el.value}>
						<ToggleSwitch defaultSelected={el.isActive}>
							{el.value}
						</ToggleSwitch>
					</li>
				))}
			</ul>
		</article>
	);
};
