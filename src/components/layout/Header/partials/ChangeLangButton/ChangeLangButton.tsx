import { useRouter } from 'next/router';

import { Button } from '@/base/Buttons';

export const ChangeLangButton = () => {
	const router = useRouter();
	const { pathname, asPath, query, locale } = router;

	const changeTo = locale === 'en' ? 'ru' : 'en';

	const changeLang = () => {
		router.push({ pathname, query }, asPath, { locale: changeTo });
	};

	return <Button onPress={changeLang}>Сменить язык</Button>;
};
