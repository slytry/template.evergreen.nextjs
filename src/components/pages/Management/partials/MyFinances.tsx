import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import BillLogo from 'public/icons/management/bill.svg';
import FinancesLogo from 'public/icons/management/payment.svg';

import styles from './MyFinances.module.scss';

const cx = cn.bind(styles);

interface IMyFinancesProp {
	className?: string;
	settlements?: {
		creditLimit: number;
		accountsReceivable: number;
		repaymentPeriod: string;
	};
}

export const MyFinances = ({ className, settlements }: IMyFinancesProp) => {
	const { t } = useTranslation(['management']);

	return (
		<div className={cx('MyFinances', className)}>
			<div className={cx('MyFinances__payment')}>
				{!settlements ? (
					<>
						<div className={cx('MyFinances__inner')}>
							<p className={cx('MyFinances__payment-title')}>
								{t('management:finance-title')}
							</p>
							<p className={cx('MyFinances__payment-subtitle')}>
								{t('management:finance-subtitle')}
							</p>
						</div>
						<FinancesLogo className={cx('MyFinances__logo')} />
					</>
				) : (
					<>
						<div className={cx('MyFinances__inner')}>
							<p className={cx('MyFinances__payment-title')}>
								{settlements.accountsReceivable}
							</p>
							<p className={cx('MyFinances__payment-subtitle')}>
								{settlements.creditLimit}
							</p>
						</div>
						{settlements.repaymentPeriod}
					</>
				)}
			</div>
			<div className={cx('MyFinances__payment')}>
				<div className={cx('MyFinances__inner')}>
					<p className={cx('MyFinances__payment-title')}>
						{t('management:bill')}
					</p>
					<p className={cx('MyFinances__payment-subtitle')}>
						{t('management:bill-subtitle')}
					</p>
				</div>
				<BillLogo className={cx('MyFinances__logo')} />
			</div>
		</div>
	);
};
