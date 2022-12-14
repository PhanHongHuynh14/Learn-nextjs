import Layout from '../components/Layout'
import Link from 'next/link'
import Button from 'react-bootstrap/Button'
import Date from '../components/date';

export default function Home() {
  return (
    <Layout>
      <h1>My Next App</h1>
      <p>This is my Next.JS App</p>
      <p>
        <Link href='/posts'>
          <Button variant='primary'>Posts</Button>
        </Link>
        <small className={utilStyles.lightText}>
          <Date dateString={date} />
        </small>
      </p>
    </Layout>
  )
}
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Learn NextJs | Easy Frontend</title>
//         <meta name="description" content="Learn NextJs + Typescript with fun :P" />
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/Home.module.css" />
//       </Head>

//       <main className={styles.main}> 
//         <h1 className={styles.title}>
//           Welcome to <a href="https://nextjs.org">Next.js!</a>
//         </h1>

//         <p className={styles.description}>
//           Get started by editing{' '}
//           <code className={styles.code}>pages/index.tsx</code>
//         </p>

//        <button onClick={goToDetailPage} >Go to post detail page</button>
//         <div className={styles.grid}>
//           <a href="https://nextjs.org/docs" className={styles.card}>
//             <h2>Documentation &rarr;</h2>
//             <p>Find in-depth information about Next.js features and API.</p>
//           </a>

//           <a href="https://nextjs.org/learn" className={styles.card}>
//             <h2>Learn &rarr;</h2>
//             <p>Learn about Next.js in an interactive course with quizzes!</p>
//           </a>

//           <a
//             href="https://github.com/vercel/next.js/tree/canary/examples"
//             className={styles.card}
//           >
//             <h2>Examples &rarr;</h2>
//             <p>Discover and deploy boilerplate example Next.js projects.</p>
//           </a>

//           <a
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//             className={styles.card}
//           >
//             <h2>Deploy &rarr;</h2>
//             <p>
//               Instantly deploy your Next.js site to a public URL with Vercel.
//             </p>
//           </a>
//         </div>

//         <div style={{marginTop:"200px"}}>
//         </div>
//         <Link href="/about">
//           <a>Go to about</a>
//         </Link>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <span className={styles.logo}>
//             <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
//           </span>
//         </a>
//       </footer>
//     </div>
//   )
// }


