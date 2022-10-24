import axios from 'axios';

import { ICompanyName } from 'lib/models/auth';

const URL = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/findById/party';
const TOKEN = '7fcc3d47f4c5267e39dec153981a3c938d6d37cf';

export async function fetchCompanyName(query: string): Promise<ICompanyName> {
	const res = await axios.post(
		URL,
		{ query },
		{
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				Authorization: `Token ${TOKEN}`,
			},
		}
	);
	if (res.status === 200) {
		return res.data;
	}
	throw new Error('Can not fetch company name by INN');
}
