import React from 'react'
import { getPostIds } from '../../lib/posts'

const Post = ( post) => {
    const router = useRouter()
    if (router.isFallback) {
		return (
			<Spinner
				animation='border'
				role='status'
				variant='dark'
				className={spinnerStyles.spinnerLg}
			>
				<span className='sr-only'>LOADING ....</span>
			</Spinner>
		)
	}
  return (
    <Layout>
			<Card className='my-3 shadow'>
				<Card.Body>
					<Card.Title>{post.title}</Card.Title>
					<Card.Text>{post.body}</Card.Text>
					<Link href='/posts'>
						<Button variant='dark'>Back</Button>
					</Link>
				</Card.Body>
			</Card>
		</Layout>
  )
}

export const getStaticPaths = async () => {
	const paths = await getPostIds()
	console.log(paths)
    return {
        paths,
        fallback: true
    }
}
export const getStaticProps = async ({ params }) => {
	const post = await getPostById(params.id)

	return {
		props: {
			post
		},
		revalidate: 1
	}
}
export default Post