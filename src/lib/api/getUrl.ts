export function getUrlBase(path = '', isApi = true) {
	const baseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://127.0.0.1:1337';

	if (isApi) return `${baseUrl}/api${path}`;

	return `${baseUrl}${path}`;
}

function getParamsStr(urlParamsObject?: Record<string, any>) {
	const params = new URLSearchParams(urlParamsObject).toString();

	if (params.length === 0) return '';

	return `?${params}`;
}

export function getFullUrl(path: string, urlParamsObject: Record<string, any>) {
	const urlWithBase = getUrlBase(path);

	const params = getParamsStr(urlParamsObject);

	return `${urlWithBase}${params}`;
}

export function getMediaUrl(url: string) {
	const imageUrl = url.startsWith('/') ? getUrlBase(url, false) : url;
	return imageUrl;
}
