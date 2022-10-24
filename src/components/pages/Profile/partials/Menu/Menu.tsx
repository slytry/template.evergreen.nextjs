import cn from 'classnames/bind';
import { useTranslation } from 'next-i18next';

import { ActiveLink } from '@/base/ActiveLink';

import styles from './Menu.module.scss';

const cx = cn.bind(styles);

interface MenuProps {
	className?: string;
}

export const Menu = ({ className }: MenuProps) => {
	const { t } = useTranslation('common');

	const menu = t('common:lkMenu', { returnObjects: true }) as Record<string, string>[];

	return (
		<nav className={cx('Menu', className)}>
			<ul className={cx('Menu__list')}>
				{menu.map((el) => (
					<li className={cx('Menu__list-item')} key={el.link}>
						<ActiveLink
							className={cx('Menu__link')}
							activeClassName={cx('Menu__link--active')}
							variant="dark"
							href={el.link}
						>
							<a>{el.title}</a>
						</ActiveLink>
					</li>
				))}
			</ul>
		</nav>
	);
};
