import Head from 'next/head';

const HomePage = () => (
	<main>
		<Head>
			<title>Simple</title>
			<meta name="description" content="Home page" />
		</Head>
		<ul>
			{/* {data.todos.map((el) => {
				<li key={el.title}>{el.title}</li>;
			})} */}
		</ul>
	</main>
);

export { HomePage };
