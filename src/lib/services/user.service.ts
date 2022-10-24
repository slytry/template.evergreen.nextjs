import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';

import { queryKeys } from 'lib/constants/queryKyes';
import { authWohleSaleURLs } from 'lib/constants/urls';
import { ILoginResponse, ISingUpRequest, TUser } from 'lib/models/auth';

import { http } from './http/http';

export const refreshAccessToken = async () =>
	await http.get<ILoginResponse>(authWohleSaleURLs.REFRESH);

export const signUpUser = async (user: ISingUpRequest) =>
	await http.post(authWohleSaleURLs.SIGNUP, user);

export const loginUser = async (user) =>
	await http.post<ILoginResponse>(authWohleSaleURLs.LOGIN, user);

export const verifyEmail = async (verificationCode: string) =>
	await http.get(`${authWohleSaleURLs.CONFIRM}/${verificationCode}`);

export const logoutUser = async () => await http.get(authWohleSaleURLs.LOGOUT);

export const getUser = async (locale = 'ru') =>
	await http.get<TUser>(authWohleSaleURLs.USER, {
		headers: { 'X-Language': locale },
	});

export const useUserQuery = () => {
	const { locale } = useRouter();

	return useQuery<TUser>([queryKeys.USER, locale], () => getUser(locale));
};
