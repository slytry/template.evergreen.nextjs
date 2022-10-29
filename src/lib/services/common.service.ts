import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { queryKeys } from 'lib/constants/queryKyes';
import { commonUrls } from 'lib/constants/urls';

import { http } from './http';
import { TTodoData } from 'lib/models/pages/Home/Todo.data.en';

export const getTodos = async (locale = 'ru') =>
	await http.get<TTodoData>(commonUrls.TODO, {
		headers: { 'X-Language': locale },
	});

export const useTodosQuery = () => {
	const { locale } = useRouter();

	return useQuery([queryKeys.TODO, locale], () => getTodos(locale));
};
