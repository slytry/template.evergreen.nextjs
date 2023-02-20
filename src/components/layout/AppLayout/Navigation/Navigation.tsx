import Link from 'next/link';

import { NavigationList } from './NavigationList';

import cx from './index.module.scss';

const Navigation = () => (
	<nav>
		{NavigationList.map((item) => (
			<Link key={item.id} href={item.url}>
				<button className={cx('navButton')}>{item.text}</button>
			</Link>
		))}
	</nav>
);

export default Navigation;
