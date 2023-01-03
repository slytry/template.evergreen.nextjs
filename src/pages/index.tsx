import { type GetStaticProps } from 'next';

import { HomePage } from '@/components/pages/Home';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async (asdf) => ({
	props: {},
});

export default Home;
