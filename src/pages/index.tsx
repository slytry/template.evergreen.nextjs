import { HomePage } from '@components/pages/Home';
import { type GetStaticProps } from 'next';

const Home = () => <HomePage />;

export const getStaticProps: GetStaticProps = async () => ({
	props: {},
});

export default Home;
