import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { DEFAULT_LOCALE } from '../constants/locales';

interface GetStaticPropsContextReduced {
	params?: any;
	preview?: boolean;
	previewData?: any;
	locale?: string;
	locales?: string[];
	defaultLocale?: string;
}

export const getI18nProps = async (
	ctx: GetStaticPropsContextReduced,
	ns: string[]
) => {
	const locale = ctx?.locale ?? DEFAULT_LOCALE;
	const props = {
		...(await serverSideTranslations(locale, ns)),
	};
	return props;
};

export const makeStaticProps =
	(ns: string[]) => async (ctx: GetStaticPropsContextReduced) => ({
		props: await getI18nProps(ctx, ns),
	});

// TODO: Надо сделать типизацию для ns параметра. Начал делать не смог. Текущая реализация требует всех ключей сразу

// import { type TupleUnion } from 'src/types/utils.types';
// type AllowedFields = TupleUnion<keyof I18nNamespaces>;
