import axios from 'axios';

const getData = async ({ page }: { page: number }) => {
	const { data } = await axios.get(`https://reqres.in/api/users?page=${page}`);
	return data;
};

export default getData;
