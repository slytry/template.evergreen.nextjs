export async function fetchData<T = unknown>(
	url: string,
	options?: RequestInit
) {
	try {
		const response = await fetch(getUrlBase(url), options);
		if (!response.ok) {
			throw new Error(response.statusText);
		}

		const data = (await response.json()) as T;
		return data;
	} catch (error) {
		console.group(['fetch error']);
		console.log(error);
		console.groupEnd();
	}
}

function getUrlBase(path = '') {
	return `${process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:1337'}${path}`;
}
