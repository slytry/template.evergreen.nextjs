import cnBind from 'classnames/bind';
import { useRouter } from 'next/router';
import { ReactElement, useEffect, useState } from 'react';
import usePortal from 'react-useportal';

import { CatalogMenu } from '@/layout/CatalogMenu';
import { useHeaderDataQuery } from 'lib/services/layout.service';

import { ChangeLangButton } from './partials/ChangeLangButton';
import { HeaderBottomBar } from './partials/HeaderBottomBar';
import { HeaderMiddleBar } from './partials/HeaderMiddleBar';
import { HeaderTopBar } from './partials/HeaderTopBar';

import styles from './Header.module.scss';

const cx = cnBind.bind(styles);

interface HeaderProps {
	className?: string;
}

const Header = ({ className }: HeaderProps): ReactElement => {
	const router = useRouter();

	const [pageType, setPageType] = useState<'wholesale' | 'retail'>('retail');

	const { togglePortal, isOpen, Portal } = usePortal({
		closeOnOutsideClick: false,
	});

	useEffect(() => {
		if (isOpen) togglePortal();
	}, [router.route]);

	const { data } = useHeaderDataQuery();

	return (
		<>
			<header className={cx('Header', className)}>
				<ChangeLangButton />

				<div className={cx('Header__container')}>
					<HeaderTopBar
						menuItems={data.menu}
						location={data.location}
						pageType={pageType}
						setPageType={setPageType}
					/>
					<HeaderMiddleBar
						isCatalogOpen={isOpen}
						toggleCatalogPortal={togglePortal}
					/>
					<HeaderBottomBar productSectionItems={data.productSections} />
				</div>
			</header>
			{isOpen && (
				<Portal>
					<CatalogMenu />
				</Portal>
			)}
		</>
	);
};

export { Header };
