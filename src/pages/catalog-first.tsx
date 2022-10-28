import { dehydrate, QueryClient } from "@tanstack/react-query";

import { queryKeys } from "lib/constants/queryKyes";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ReactElement } from "react";

import { CatalogFirst } from "components/pages/CatalogFirst";
import { config } from "lib/config/react-query-config";
import { getHeaderData } from "lib/services/layout.service";

const CatalogFirstPage = (): ReactElement => <CatalogFirst />;

export default CatalogFirstPage;

export const getStaticProps: GetStaticProps = async (context) => {
	const { locale } = context;

	const queryClient = new   QueryClient(config);

	await queryClient.prefetchQuery([queryKeys.HEADER_DATA, locale],    () =>
		getHeaderData(locale)
	);

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale, ["common", "footer"])),
		},
	};
};
