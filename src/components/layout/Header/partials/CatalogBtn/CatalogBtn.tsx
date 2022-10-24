import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';
import { ReactElement } from 'react';

import styles from './CatalogBtn.module.scss';

const cx = cn.bind(styles);

interface CatalogBtnProps {
	className?: string;
	onClick: () => void;
	isCatalogOpen: boolean;
}

const CatalogBtn = ({
	className,
	onClick,
	isCatalogOpen,
}: CatalogBtnProps): ReactElement => {
	const { t } = useTranslation(['common']);
	return (
		<button
			type="button"
			onClick={onClick}
			className={cx(className, 'CatalogBtn', {
				'CatalogBtn--open': isCatalogOpen,
			})}
		>
			<div className={cx('CatalogBtn__burger')}>
				<div className={cx('CatalogBtn__line')} />
			</div>
			<span>{t('common:catalog')}</span>
		</button>
	);
};

export { CatalogBtn };
