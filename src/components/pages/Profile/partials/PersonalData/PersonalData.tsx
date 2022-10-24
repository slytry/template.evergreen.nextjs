import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { Heading } from '@/base/Heading';
import { useUserQuery } from 'lib/services/user.service';

import { DataSections } from './DataSections';

import styles from './PersonalData.module.scss';

const cx = cn.bind(styles);

interface PersonalDataProps {
	className?: string;
}

export const PersonalData = ({ className }: PersonalDataProps) => {
	const { t } = useTranslation('profile');

	const { isLoading, isError, isSuccess, data } = useUserQuery();

	const renderResult = () => {
		if (isLoading) {
			return <div className="search-message">Loading...</div>;
		}
		if (isError) {
			return <div className="search-message">Something went wrong</div>;
		}
		if (isSuccess) {
			return <DataSections {...data} />;
		}
		return null;
	};

	return (
		<article className={cx('PersonalData', className)}>
			<Heading level="2" className={cx('PersonalData__heading')}>
				{t('personal-data')}
			</Heading>
			{renderResult()}
		</article>
	);
};
