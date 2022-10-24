import cn from 'classnames/bind';
import Head from 'next/head';
import { PropsWithChildren } from 'react';

import { anyObject } from 'types/utils.types';

import { Footer } from '../Footer';
import { Header } from '../Header';

import styles from './AppLayout.module.scss';

const cx = cn.bind(styles);

const AppLayout = ({ children }: PropsWithChildren<anyObject>) => (
	<>
		<Head>
			<link rel="icon" href="/icons/favicon.svg" />
		</Head>
		<div className={cx('Layout')}>
			<Header />
			{children}
			<Footer />
		</div>
	</>
);

export { AppLayout };
