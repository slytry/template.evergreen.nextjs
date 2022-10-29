import axios, {
	AxiosInstance,
	AxiosRequestConfig,
	AxiosResponse,
	AxiosError,
} from 'axios';

import { HttpStatusCodes } from 'lib/constants/HttpStatusCode.ts';
import { baseURL } from 'lib/constants/urls';

const headers: Readonly<Record<string, string | boolean>> = {
	Accept: 'application/json',
	'Content-Type': 'application/json; charset=utf-8',
	'Access-Control-Allow-Credentials': true,
	'X-Requested-With': 'XMLHttpRequest',
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

		http.interceptors.response.use(
			({ data }: AxiosResponse) => data,
			(error) => this.handleError(error)
		);

		this.instance = http;
		return http;
	}

	request<T = unknown, R = AxiosResponse<T>>(
		config: AxiosRequestConfig
	): Promise<R> {
		return this.http.request(config);
	}

	get<T = unknown, R = AxiosResponse<T>>(
		url: string,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.get<T, R>(url, config);
	}

	post<T = unknown, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.post<T, R>(url, data, config);
	}

	put<T = unknown, R = AxiosResponse<T>>(
		url: string,
		data?: T,
		config?: AxiosRequestConfig
	): Promise<R> {
		return this.http.put<T, R>(url, data, config);
	}

	delete<T = unknown, R = AxiosResponse<T>>(
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
					break;
				}
				case HttpStatusCodes.UNAUTHORIZED: {
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
