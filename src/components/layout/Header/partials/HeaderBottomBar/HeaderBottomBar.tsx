import cnBind from 'classnames/bind';
import { ReactElement } from 'react';

import { HeaderBottomBarProps } from './HeaderBottomBar.types';

import styles from './HeaderBottomBar.module.scss';

const cx = cnBind.bind(styles);

const HeaderBottomBar = ({
	className,
	productSectionItems,
}: HeaderBottomBarProps): ReactElement => (
	<div className={cx('HeaderBottomBar', className)}>
		<div className={cx('HeaderBottomBar__wrapper')}>
			{productSectionItems.map((item) => (
				<div key={item.slug} className={cx('HeaderBottomBar__icon-wrapper')}>
					<img src={item.icon} alt="" width={17} height={17} />
					<a href="#" className={cx('HeaderBottomBar__location')}>
						{item.content}
					</a>
				</div>
			))}
		</div>
	</div>
);

export { HeaderBottomBar };
