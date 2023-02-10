import { makeStaticProps } from 'src/lib/helpers/getStatic';

import { Error404 } from '@/pages/Error404';

const Homepage = () => <Error404 />;

export default Homepage;

export const getStaticProps = makeStaticProps(['common']);
