import { getFullUrl } from './getUrl';

export async function fetchApi<TResponse>(
	path: string,
	urlParamsObject?: Record<string, any>,
	options?: RequestInit
): Promise<TResponse> {
	const requestUrl = getFullUrl(path, urlParamsObject ?? {});
	console.log(requestUrl);

	const response = await fetch(requestUrl, options);

	if (!response.ok) {
		throw new Error(response.statusText);
	}

	const data = (await response.json()) as TResponse;
	return data;
}
