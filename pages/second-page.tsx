import { type GetStaticProps } from 'next';

import { makeStaticProps } from 'src/lib/helpers/getStatic';

import { Second } from '@/pages/Second';

const SecondPage = () => <Second />;

export const getStaticProps: GetStaticProps = makeStaticProps(['second']);

export default SecondPage;
