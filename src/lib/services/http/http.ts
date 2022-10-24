/* eslint-disable default-case */
import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from 'axios';
import { getCookie, setCookie } from 'cookies-next';
import toast from 'react-hot-toast';

import { HttpStatusCodes } from 'lib/constants/HttpStatusCode.ts';
import { baseURL } from 'lib/constants/urls';

import { refreshAccessToken } from '../user.service';

declare module 'axios' {
	interface AxiosResponse<T = any> extends Promise<T> {}
}

const cookieAccesToken = 'accessToken';

const headers: Readonly<Record<string, string | boolean>> = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
	'Access-Control-Allow-Credentials': true,
	'X-Requested-With': 'XMLHttpRequest',
};

const injectToken = (config: AxiosRequestConfig): AxiosRequestConfig => {
	try {
		const token = getCookie(cookieAccesToken);

		if (token != null) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	} catch (error) {
		throw new Error(error);
	}
};

class Http {
	private instance: AxiosInstance | null = null;

	private get http(): AxiosInstance {
		return this.instance != null ? this.instance : this.initHttp();
	}

	initHttp() {
		const http = axios.create({
			baseURL,
			headers,
			withCredentials: true,
		});

		http.interceptors.request.use(injectToken, (error) => Promise.reject(error));

		http.interceptors.response.use(
			({ data }: AxiosResponse) => data,
			(error) => this.handleError(error)
		);

		this.instance = http;
		return http;
	}

	request<T = any, R = AxiosResponse<T>>(config: AxiosRequestConfig): Promise<R> {
		return this.http.request(config);
	}

	get<T = any, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.get<T, R>(url, config);
	}

	post<T = any, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.post<T, R>(url, data, config);
	}

	put<T = any, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.put<T, R>(url, data, config);
	}

	delete<T = any, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.delete<T, R>(url, config);
	}

	private async handleError(error: AxiosError) {
		const { status } = error.response;

		if (status !== 0) {
			switch (status) {
				case HttpStatusCodes.INTERNAL_SERVER_ERROR: {
					break;
				}
				case HttpStatusCodes.FORBIDDEN: {
					toast.error('FORBIDDEN');

					break;
				}
				case HttpStatusCodes.UNAUTHORIZED: {
					const config = error?.config as AxiosRequestConfig & {
						_retry: boolean;
					};
					if (!config._retry) {
						config._retry = true;
						const { access_token } = await refreshAccessToken();
						setCookie(cookieAccesToken, access_token);
						config.headers.Authorization = `Bearer ${access_token}`;
						return this.http(config);
					}
					break;
				}
				case HttpStatusCodes.TOO_MANY_REQUESTS: {
					break;
				}
			}
		} else {
			switch (error.code) {
				case 'ERR_NETWORK': {
					break;
				}
			}
		}
		return Promise.reject(error);
	}
}

export const http = new Http();
