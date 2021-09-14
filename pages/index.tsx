import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
	return (
		<div className={styles.container}>
			<Head>
				<title>Docz Practice</title>
				<meta
					name='description'
					content='Creating a ui component using nextjs ts, and documentation by docz'
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<main className={styles.main}>
				<h1 className={styles.title}>Docz Practice</h1>

				<p className={styles.description}>
					We are going to learn about docz today
				</p>

				<Button text='Learn More' variant='primary' />
			</main>
		</div>
	)
}

export default Home
